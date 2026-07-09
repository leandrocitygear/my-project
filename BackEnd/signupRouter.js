import express from 'express';
import bcrypt from 'bcrypt';
import pool from './db.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(400).json({
                message: 'Email already exists'
            });  
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            `INSERT INTO users (email, password)
            VALUES($1, $2)
            RETURNING id, email`, 
            [email, hashedPassword]
        )

        res.status(201).json(newUser.rows[0]);
    } 
     
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }

})

export default router;
