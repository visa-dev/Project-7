import express from "express";
import { showCoatch, addCoatch } from '../Controllers/CoatchController';

const router = express.Router();

router.post('/showcoatch', showCoatch);
router.post('/addcoatch', addCoatch);

export default router;