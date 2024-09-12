import {faker} from "@faker-js/faker"
import { client, db } from ".";
import { GoalCompletions, goals } from "./schema";
import {randomUUID} from "node:crypto"
import dayjs from "dayjs";

//seed sao arquivos que preenchem o banco de dados com informaçoes ficticias 
async function seed() {
    //limpar o banco de dados
    await db.delete(GoalCompletions)
    await db.delete(goals)

    //insert em goals
    const result = await db.insert(goals).values([
        {Title:faker.lorem.word(),id:randomUUID(),desiredWeeklyFrequency:faker.number.int({min:1,max:10})},
        {Title:faker.lorem.word(),id:randomUUID(),desiredWeeklyFrequency:faker.number.int({min:1,max:10})},
        {Title:faker.lorem.word(),id:randomUUID(),desiredWeeklyFrequency:faker.number.int({min:1,max:10})},
        {Title:faker.lorem.word(),id:randomUUID(),desiredWeeklyFrequency:faker.number.int({min:1,max:10})},
    ]).returning()
    await db.insert(GoalCompletions).values([
        {Id:randomUUID(),goalId:result[0].id,CreatedAt:dayjs().startOf("week").toDate()},
        {Id:randomUUID(),goalId:result[1].id,CreatedAt:dayjs().startOf("week").add(1,"day").toDate()}
    ])
}

seed().finally(()=>{
    client.end()
})
