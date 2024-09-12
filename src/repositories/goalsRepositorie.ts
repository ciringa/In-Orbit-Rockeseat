import { goals } from "../db/schema";
import type { createGoalInterface,GoalInterface } from "../interfaces/goalsInterfaces";


export interface GoalsRepositorie{
    create(data:createGoalInterface):Promise<GoalInterface>
}