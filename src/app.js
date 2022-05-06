import express from 'express';
import morgan from 'morgan';

import projectsRoutes from './routes/project.routes.js';
import tasksRoutes from './routes/task.routes.js';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);

export default app;
