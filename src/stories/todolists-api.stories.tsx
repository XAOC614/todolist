import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers:{
        'API-KEY':'0a18320d-7a98-4203-b236-40819976048c'
    }
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',settings)
           .then((res)=>{
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const data={title:'Lesson 13'}
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',data,settings)
            .then(()=>{})
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'c1ad469e-0f0c-43c7-b0a3-2c4813043294'
    useEffect(() => {
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,settings)
            .then(()=>{

            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
