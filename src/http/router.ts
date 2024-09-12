import type{ FastifyInstance } from "fastify";
import { GoalsRoutes } from "./routers/goals.router";


export async function Router(app:FastifyInstance) {
    app.register(GoalsRoutes,{
        prefix:"/goals"
    })
}