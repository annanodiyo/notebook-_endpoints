import express from "express";
import * as dotenv from "dotenv";
import { router as notesRouter } from "./appnotes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/notes", notesRouter);
app.listen(PORT, () => {
  console.log("Server is running on port || 4000");
});
