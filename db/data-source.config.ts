import * as dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";
dotenv.config();
export function getConfig() {
    return {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: ['dist/**/*.entity.js', 'dist/**/*.entity.ts'],
        migrations:["dist/db/migrations/*.js"]
    } as DataSourceOptions;
}
