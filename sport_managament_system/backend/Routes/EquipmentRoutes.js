import express from "express";

import { showEquipment, addEquipment, deleteEquipment, updateEquipment } from '../Controllers/EquipmentController.js';

const router = express.Router();


router.get('/show', showEquipment);
router.post('/add', addEquipment);
router.delete('/delete/:id', deleteEquipment);
router.put('/update/:id', updateEquipment);



export default router;