import "dotenv/config";
import express, { Application, Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const app: Application = express();
const PORT = process.env.PORT || 7000;


const __dirname = path.dirname(fileURLToPath(import.meta.url));
// use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set
app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./views"));

app.get("/", (req: Request, res: Response): any => {
  return res.render("welcome");
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
