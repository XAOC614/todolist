import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Task} from "../Task";
import {action} from "@storybook/addon-actions";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {EditableSpan} from "../EditableSpan";
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

export default {
    title: 'TODOLIST/Task',
    component: Task,
    args:{
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        todolistId:'afgfdafbd',
        task: {id:'fdagsag', title:'JS', isDone:true},
    }
} as ComponentMeta<typeof Task>;


const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});


export const TaskIsNotDone = Template.bind({})
TaskIsNotDone.args = {
    task: {id:'fdagsag', title:'JS', isDone:false},
};

const TemplateWork: ComponentStory<typeof Task> = (args) =>{
    const [task, setTask]=useState(args.task)
    const onClickHandler = () => args.removeTask('gdfsg','dgsdf')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        setTask({...task,isDone:newIsDoneValue})
    }
    const onTitleChangeHandler = (newValue: string) => {
        setTask({...task,title:newValue})
    }

    return <div key={task.id} className={task.isDone ? 'is-done' : ''}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
}
export const TaskWorkStory = TemplateWork.bind({
    removeTask: action('removeTask'),
})
