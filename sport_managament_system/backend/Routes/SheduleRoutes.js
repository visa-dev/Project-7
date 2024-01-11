import express from "express";

import { showShedule, addShedule, deleteShedule, updateShedule } from '../Controllers/SheduleController.js';

const router = express.Router();


router.get('/show', showShedule);
router.post('/add', addShedule);
router.delete('/delete/:id', deleteShedule);
router.put('/update/:id', updateShedule);



export default router;