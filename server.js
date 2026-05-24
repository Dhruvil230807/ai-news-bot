const express = require("express");
const cron = require("node-cron");

const app = express();

function sendDigest() {
console.log("AI Digest Sent at:", new Date());
}

/* DAILY 12 PM INDIA TIME */

cron.schedule("30 6 * * *", () => {
sendDigest();
});

app.get("/", (req, res) => {
res.send("AI Digest Bot Running");
});

app.listen(3000, () => {
console.log("Server Running");
});
