import {drizzle} from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"
import { DATABASE_URL } from "../lib/env"

export const client = postgres(DATABASE_URL)
export const db =  drizzle(client,{
    schema,logger:true
})

