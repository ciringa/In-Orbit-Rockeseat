import 'dotenv/config'
import {z} from "zod"

export const {HOST,PORT,DATABASE_URL} = z.object({
    PORT:z.string(),
    HOST:z.string(),
    DATABASE_URL:z.string()
}).parse(process.env)