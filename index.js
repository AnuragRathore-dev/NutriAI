import loadEnv from "./env.js";
import app from "./app.js";
import {exec} from 'child_process';
 

import authRouter from "./src/features/auth/auth.Routes.js";
import userRouter from "./src/features/user/user.Routes.js";
import questionRouter from "./src/features/questions/question.Routes.js";

app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);
app.use('/api/questions',questionRouter);

app.use((req,res)=>{
    res.status(404).send("API not found. Please check our documentation for more information at localhost:3100/api-docs");
})


app.listen(3100,()=>{
    console.log(`server is running on 3100`);
})
 
