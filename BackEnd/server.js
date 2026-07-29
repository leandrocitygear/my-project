import express from 'express'
import cors from 'cors'
import router from './signupRouter.js'
import loginRouter from './loginRouter.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use("/api", loginRouter);

app.listen(PORT, () => {
    console.log('Server running');
});

