import express from "express";
import { showCoatch, addCoatch,deleteCoatch } from '../Controllers/CoatchController.js';

const router = express.Router();

router.get('/show', showCoatch);
router.post('/add', addCoatch);
router.delete('/delete/:id', deleteCoatch);

export default router;