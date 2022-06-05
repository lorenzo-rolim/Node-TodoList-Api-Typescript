import express, { Request, Response } from "express";
import mongoose from "mongoose";
import router from "./routes";
import cors from "cors";

const app = express();

let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, PUT, POST, DELETE",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

// Put your mongoDB connect string below
mongoose
  .connect("")

  .then((data) => console.log("Conexão com sucesso"))

  .catch((err) => {
    console.log("Erro na conexão", err.message);
  });

app.listen(3333);
