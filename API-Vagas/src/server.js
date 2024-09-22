import express from 'express';
import cors from "cors";
import { JobRouter } from "./router/Job.Routes.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(JobRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });