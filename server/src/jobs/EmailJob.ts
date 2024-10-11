import { Job, Queue, Worker } from "bullmq";
import { sendEmail } from "../config/mail.js";
import { connectionRedis, defaultQueueOptions } from "../config/queue.js";

export const emailQueueName = "emailQueue";

interface EmailJobDataType {
  to: string;
  subject: string;
  body: string;
}
export const emailQueue = new Queue(emailQueueName, {
  connection: connectionRedis,
  defaultJobOptions: defaultQueueOptions,
});

export const QueueWoker = new Worker(
  emailQueueName,
  async (job: Job) => {
    const data: EmailJobDataType = job.data;
    await sendEmail(data.to, data.subject, data.body);
    console.log("The queue data is", data);
  },
  {
    connection: connectionRedis,
  }
);
