

export interface createGoalInterface {
    Title:string,
    desiredWeeklyFrequency:number,
    CreatedAt:Date | undefined
}

export interface GoalInterface{
    Id:string,
    Title:string,
    desiredWeeklyFrequency:number,
    CreatedAt:Date
}

