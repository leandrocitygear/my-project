import express from "express";
import bcrypt from "bcrypt";
import pool from "./db.js";
import e from "express";

const userRouter = express.Router();

userRouter.put("/change-password", async (req, res) => {
    const { userId, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
        "UPDATE users SET password = $1 WHERE id = $2",
        [hashedPassword, userId]
    );

    res.json({ message: "Password updated successfully" });
});


userRouter.delete("/delete-account", async (req, res) => {
    try {
        const { userId } = req.body;

       const result = await pool.query(
            "DELETE FROM users WHERE id = $1 RETURNING id",
            [userId]
        );

        if (result.rows.length === 0) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        res.json({
            message: "Account deleted successfully"
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});


export default userRouter;