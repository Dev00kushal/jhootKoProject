import "dotenv/config";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response): any => {
  return res.send("Chal vai suru ho jao");
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
