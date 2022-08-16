import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";


function App() {
    const title1 = 'What to learn 1'
    const title2 = 'What to learn 2'
    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    return (
        <div className="App">
            <Header titleForHeader = {'NEW HEADER'}/>
            <Body titleForBody = {'NEW BODY'}/>
            <div>
            <Todolist title={title1} titleNew={100200} tasks={tasks1}/>
            <Todolist title={title2} tasks={tasks2}/>
            </div>
            <Footer titleForFooter = {'NEW FOOTER'}/>
        </div>
    );
}



export default App;
