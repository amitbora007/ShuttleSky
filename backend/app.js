import express from "express";
import cors from "cors";
import {
  contactUsRouter,
  registerRouter,
  paymentRouter,
} from "./routes/routes.js";
import { config } from "dotenv";
config({ path: "./config/config.env" });

export const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/contactUs", contactUsRouter);
app.use("/register", registerRouter);

app.get("/", (req, res) => {
  res.send("Welcome to server");
});