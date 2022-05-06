import { Router } from 'express';
import {
    createProject,
    deleteProject,
    getProject,
    getProjects,
    getProjectTasks,
    updateProject
} from '../controllers/project.controller.js';

const router = Router();

router.get('', getProjects);
router.post('', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.get('/:id', getProject);

router.get('/:id/tasks', getProjectTasks);

export default router;