import env from 'dotenv';

env.config();

export const POSTGRES_URL = process.env.POSTGRES_URL;