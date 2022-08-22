import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [tasks1, setTask1] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: false }
    ])

    let [filtTask, setFiltTask] = useState('ALL')
    let tasksToDoList = tasks1
    if(filtTask === "Completed"){
        tasksToDoList = tasks1.filter(el=>el.isDone)}
    if(filtTask === "Active"){
        tasksToDoList = tasks1.filter(el=>!el.isDone)
    }
    let filterTask = (taskValue:string) => {
        setFiltTask(taskValue)
    }
    let removeTask =  (taskId:number) => {
        setTask1(tasks1.filter((f)=> f.id !== taskId))
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasksToDoList}
                      removeTask={removeTask}
                      filterTask={filterTask}/>

        </div>
    );
}

export default App;
