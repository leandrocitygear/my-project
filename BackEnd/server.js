import express from 'express'
import cors from 'cors'
import router from './signupRouter.js'
import loginRouter from './loginRouter.js';
import dotenv from "dotenv";
import transactionRouter from './transactions.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use("/api", loginRouter);
app.use("/api", transactionRouter)

app.get("/api/test", (req, res) => {
    res.json({
        message: "Backend is alive"
    });
});


app.listen(PORT, () => {
    console.log('Server running');
});

