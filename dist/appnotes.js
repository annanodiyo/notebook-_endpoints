"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const notes_ = [];
router.post("/appnotes", (req, res) => {
    const { title, content } = req.body;
    const newNote = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        content,
        createdAt: new Date().toISOString(),
    };
    notes_.push(newNote);
    res.status(201).json(newNote);
});
router.get("/appnotes", (req, res) => {
    res.json(notes_);
});
router.get("/notes_/:id", (req, res) => {
    const note = notes_.find((n) => n.id === req.params.id);
    if (note) {
        res.json(note);
    }
    else {
        res.status(404).json({ message: "Note not found" });
    }
});
