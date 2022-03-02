import express from 'express';
import { getStudents, createStudent } from '../controllers/student.js';
import student from '../models/students.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent)

export default router;