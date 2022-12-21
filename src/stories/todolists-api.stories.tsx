import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistAPI} from "../api/todolist-api";
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
       todolistAPI.getTodolists()
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
        todolistAPI.createTodolist(data)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'c1ad469e-0f0c-43c7-b0a3-2c4813043294'
    useEffect(() => {
        todolistAPI.deleteTodolist(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const data = {title:'XAOC 615'}
    const todolistId = 'de6cdc40-22e3-4de7-8f74-768a9e52c073'
    useEffect(() => {
       todolistAPI.updateTodolist(todolistId,data)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
