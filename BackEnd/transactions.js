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


transactionRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const {
            date,
            type,
            category,
            description,
            amount
        } = req.body;

        const result = await pool.query(
            `
            UPDATE transactions
            SET
                date = $1,
                type = $2,
                category = $3,
                description = $4,
                amount = $5
            WHERE id = $6
            RETURNING *;
            `,
            [
                date,
                type,
                category,
                description,
                amount,
                id
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Transaction not found"
            });
        }

        res.json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
});

transactionRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            `
            DELETE FROM transactions
            WHERE id = $1
            RETURNING *;
            `,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Transaction not found"
            });
        }

        res.json({
            message: "Transaction deleted successfully",
            transaction: result.rows[0]
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
});

export default transactionRouter;