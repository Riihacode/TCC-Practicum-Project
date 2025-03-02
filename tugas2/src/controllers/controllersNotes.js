import Note from "../models/modelsNotes.js";
import {
    successResponse,
    errorResponse
} from "../utils/utilsResponseHandler.js";

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        successResponse(res, notes, "Notes retrieved successfully");
    } catch (error) {
        errorResponse(res, "Failed to retrieve notes");
    }
};

const createNote = async (req, res) => {
    try {
        // const { user_id, title, content } = req.body;
        const { title, content } = req.body;
        const user_id = req.user.id;

        const note = await Note.create({ user_id, title, content });
        successResponse(res, note, "Note created successfully", 201);
    } catch (error) {
        errorResponse(res, "Failed to update note");
    }
};

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        await Note.update({ title, content }, { where: { id } });
        successResponse(res, null, "Note updated successfully");
    } catch (error) {
        errorResponse(res, "Failed to update note");
    }
    
}

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await Note.destroy({ where: { id } });
        successResponse(res, null, "Note deleted successfully");
    } catch (error) {
        errorResponse(res, "Failed to delete note");
    }
};

export {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
};