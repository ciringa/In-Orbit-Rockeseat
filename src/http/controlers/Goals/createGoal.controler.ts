import { log } from "node:console";
import type{ FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { DrizzleGoalsRepositorie } from "../../../repositories/drizzle/drizzleGoals.repositorie";



export async function CreateGoalControler(req:FastifyRequest,res:FastifyReply) {
    const {Title,desiredWeeklyFrequency,CreatedAt} = z.object({
        Title:z.string(),
        desiredWeeklyFrequency:z.number().int(),
        CreatedAt:z.date().optional()
    }).parse(req.body)
    const mainRepositorie = new DrizzleGoalsRepositorie()
    try{
        const resp = mainRepositorie.create({
            Title,desiredWeeklyFrequency,CreatedAt
        })
        res.status(201).send({
            Description:"Goal Successfully created ",
            resp
        })
    }catch(err){
        log(err)
    }
}