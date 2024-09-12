import { randomUUID } from "node:crypto";
import { db } from "../../db";
import { goals } from "../../db/schema";
import type { createGoalInterface, GoalInterface } from "../../interfaces/goalsInterfaces";
import type { GoalsRepositorie } from "../goalsRepositorie";

export class DrizzleGoalsRepositorie implements GoalsRepositorie{
    async create(data: createGoalInterface){
        const create = await db.insert(goals).values([{id:randomUUID(),Title:data.Title,CreatedAt:data.CreatedAt||new Date(),desiredWeeklyFrequency:data.desiredWeeklyFrequency}])
        return create[0]
    }
}