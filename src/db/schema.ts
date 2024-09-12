import { randomUUID } from "node:crypto"
import {pgTable,text,integer,timestamp} from "drizzle-orm/pg-core"

export const goals = pgTable( "goals",{
    id:text("id").primaryKey().default(randomUUID()),
    Title:text("title").notNull(),
    desiredWeeklyFrequency:integer("desired_weekly_freequency").notNull(),
    CreatedAt:timestamp("created_at",{
        withTimezone:true
    }).notNull().defaultNow(),
})

export const GoalCompletions = pgTable("goal_completions",{
    Id:text("id").primaryKey(),
    goalId:text("goal_id").references(()=>goals.id).notNull(),
    CreatedAt:timestamp("created_at",{
        withTimezone:true
    }).notNull().defaultNow(),
})