import express from "express";
import bcrypt from "bcrypt";
import pool from "./db.js";

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

export default userRouter;