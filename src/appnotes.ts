import express, { Request, Response } from "express";
import { Note } from "../src/notes";

const router = express.Router();
const notes_: Note[] = [];

router.post("/appnotes", (req: Request, res: Response) => {
  const { title, content } = req.body;
  const newNote: Note = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    content,
    createdAt: new Date().toISOString(),
  };
  notes_.push(newNote);
  res.status(201).json(newNote);
});
router.get("/appnotes", (req: Request, res: Response) => {
  res.json(notes_);
});

router.get("/notes_/:id", (req: Request, res: Response) => {
  const note = notes_.find((n) => n.id === req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});
