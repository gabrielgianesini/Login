import express from "express";
import cors from "cors";
import { enviaTeste } from "./testes/teste";

const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(3002, () => console.log("API is running on port 5001"));
enviaTeste();
