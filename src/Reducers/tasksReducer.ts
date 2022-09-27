import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const tasksReducer = (state:Array<TaskType>,action:tsarType)=>{
    switch(action.type){
        case 'REMOVE-TASK':{
            return state.filter(t => t.id != action.payload.id)
        }
        case 'ADD-TASK':{
            let task = { id: v1(), title:action.payload.title, isDone: false };

            return  [task,...state]
        }
        default: return state
    }
}
type tsarType = removeTaskACType|addTackACType


type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id:string) =>{

    return {
        type: 'REMOVE-TASK',
        payload:{
            id:id
        }
    } as const
}
type addTackACType=ReturnType<typeof addTackAC>
export const addTackAC = (title:string)=>{
    return{
        type:'ADD-TASK',
        payload:{
            title:title
        }
    }as const
}