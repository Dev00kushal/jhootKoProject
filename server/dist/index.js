import "dotenv/config";
import express from "express";
const app = express();
const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => {
    return res.send("Chal vai suru ho jao");
});
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
