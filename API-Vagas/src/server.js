import express from 'express';
import cors from "cors";
import { JobRouter } from "./router/Job.Routes.js";

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(JobRouter);

// Rota para verificar se o servidor está funcionando
app.get("/", (req, res) => {
    res.send("Servidor está rodando!");
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Configurações de cabeçalho CORS (opcional, já coberto pelo middleware cors)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
