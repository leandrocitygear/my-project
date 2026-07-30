import express from "express";
import pool from "./db.js";

const transactionRouter = express.Router();

transactionRouter.post("/", async (req, res) => {
    try {
        const {
           user_id,
            date,
            type,
            category,
            description,
            amount 
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO transactions
            (user_id, date, type, category, description, amount)
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING *
            `,
            [
                user_id,
                date,
                type,
                category,
                description,
                amount
            ]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({message:"Server Error"});
    }
});

transactionRouter.get("/:userId", async (req, res) => {
    try {

        const { userId } = req.params;

        console.log("User ID:", userId);
    
        const result = await pool.query(
            `
            SELECT * FROM transactions
            WHERE user_id = $1
            ORDER BY date DESC
            `,
            [userId]
        ); 
    
        res.json(result.rows);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message:"Server Error"
        });
    }
});


export default transactionRouter;