import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = process.env.PORT || 7000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.get("/", (req, res) => {
    return res.render("welcome");
});
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
