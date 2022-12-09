import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Task} from "../Task";
import {action} from "@storybook/addon-actions";

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