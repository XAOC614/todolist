import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(taskId:number)=>void
    filterTask:(taskValue:string)=>void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((t)=>{
            return(<li key={t.id}>
                <button onClick={()=>props.removeTask(t.id)}>x</button>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
            </li>)
            }
            )
            }
        </ul>
        <div>
            <button onClick={()=>props.filterTask('All')}>All</button>
            <button onClick={()=>props.filterTask('Active')}>Active</button>
            <button onClick={()=>props.filterTask('Completed')}>Completed</button>
        </div>
    </div>
}
