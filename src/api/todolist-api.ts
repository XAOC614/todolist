import axios from "axios";
type DataType = {
    title: string
}
type TodolistType = {
    id:string
    title:string
    addedDate:string
    order:number
}
type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}
const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '0a18320d-7a98-4203-b236-40819976048c'
    }
})

export const todolistAPI = {
    getTodolists() {
        const promise = instance.get<TodolistType[]>('todo-lists')
        return promise
    },
    createTodolist(data: DataType) {
        const promise = instance.post<ResponseType<{item:TodolistType}>>('todo-lists', data)
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todolistId}`)
        return promise
    },
    updateTodolist(todolistId: string, data: DataType) {
        const promise = instance.put<ResponseType>(`todo-lists/${todolistId}`, data)
        return promise
    }
}