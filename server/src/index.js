import "dotenv/config";
import ejs from "ejs";
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
app.get("/", async (req, res) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/email.ejs`, {
        name: "Kushal Chaulagain",
    });
    // await sendEmail("nayeje3679@scarden.com","Testing smtp",html);
    await emailQueue.add(emailQueueName, {
        to: "nayeje3679@scarden.com",
        subject: "Testing email",
        html: html,
    });
    return res.json({ msg: "Email send sucessfulyy" });
});
// Queues
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";
import "./jobs/index.js";
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
