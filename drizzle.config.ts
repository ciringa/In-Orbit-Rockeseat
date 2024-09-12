import { defineConfig } from 'drizzle-kit'
import { DATABASE_URL } from './src/lib/env'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dbCredentials: {
    url: DATABASE_URL,
  },
  dialect: 'postgresql',
})