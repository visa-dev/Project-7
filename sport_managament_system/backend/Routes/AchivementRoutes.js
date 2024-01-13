import express from "express";
import { showAchivement, addAchivement, deleteAchivement, updateAchivement } from '../Controllers/AchivementController.js';

const router = express.Router();

router.get('/show', showAchivement);
router.post('/add', addAchivement);
router.delete('/delete/:id', deleteAchivement);
router.put('/update/:id', updateAchivement);


export default router;