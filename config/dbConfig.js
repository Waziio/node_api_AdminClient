import dotenv from "dotenv";

dotenv.config();

export const config = {
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
};
