import express from 'express'
import cors from 'cors'
import router from './signupRouter.js'
import loginRouter from './loginRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use("/api", loginRouter);

app.listen(5000, () => {
    console.log('Server running');
});

