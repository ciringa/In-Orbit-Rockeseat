import type{ FastifyInstance } from "fastify";
import { CreateGoalControler } from "../controlers/Goals/createGoal.controler";

export async function GoalsRoutes(app:FastifyInstance) {
    app.post("/create",CreateGoalControler)
}