import dotenv from 'dotenv';
dotenv.config({ path: "./src/config/.env" });

const PORT = Number(process.env.PORT) || 3000;
const PROTO = process.env.PROTO || "http";
const HOST = process.env.HOST || "localhost";
const DB_TYPE = process.env.DB_TYPE || "postgres";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT) || 5432;
const DB_USERNAME = process.env.DB_USERNAME || "test";
const DB_PASSWORD = process.env.DB_PASSWORD || "test";
const DB_DATABASE = process.env.DB_DATABASE || "test";

export { PORT, PROTO, HOST, DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE };