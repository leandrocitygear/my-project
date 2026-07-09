import express from "express";
import bcrypt from "bcrypt";
import pool from "./db.js";

const loginRouter = express.Router();

loginRouter.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find user
        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (user.rows.length === 0) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }


        const existingUser = user.rows[0];


        // Compare password
        const passwordMatch = await bcrypt.compare(
            password,
            existingUser.password
        );


        if (!passwordMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }


        res.status(200).json({
            message: "Login successful",
            user: {
                id: existingUser.id,
                email: existingUser.email
            }
        });


    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server error"
        });

    }

});


export default loginRouter;