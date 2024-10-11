import { Queue, Worker } from "bullmq";
import { sendEmail } from "../config/mail.js";
import { connectionRedis, defaultQueueOptions } from "../config/queue.js";
export const emailQueueName = "emailQueue";
export const emailQueue = new Queue(emailQueueName, {
    connection: connectionRedis,
    defaultJobOptions: defaultQueueOptions,
});
export const QueueWoker = new Worker(emailQueueName, async (job) => {
    const data = job.data;
    await sendEmail(data.to, data.subject, data.body);
    console.log("The queue data is", data);
}, {
    connection: connectionRedis,
});
