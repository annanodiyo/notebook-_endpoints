import { Router } from "express";
import { takeNotes } from "../controllers/notesControllers";

const notes_router = Router();
notes_router.post("/take", takeNotes);

export default notes_router;
