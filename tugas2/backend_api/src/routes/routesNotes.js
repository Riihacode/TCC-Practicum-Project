import express from "express";
import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from "../controllers/controllersNotes.js";
import verifyToken from "../middlewares/middlewaresAuth.js";

const router = express.Router();

router.get("/notes", verifyToken, getAllNotes);
router.get("/notes/:id", verifyToken, getNoteById);
router.post("/notes", verifyToken, createNote);
router.put("/notes/:id", verifyToken, updateNote);
router.delete("/notes/:id", verifyToken, deleteNote);

export default router;