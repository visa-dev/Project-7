import express from "express";
import { showCoatch, addCoatch } from '../Controllers/CoatchController.js';

const router = express.Router();

router.get('/show', showCoatch);
router.post('/add', addCoatch);

export default router;