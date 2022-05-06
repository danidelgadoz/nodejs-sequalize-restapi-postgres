import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'projectsdb',
    'postgres',
    'secret',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);
