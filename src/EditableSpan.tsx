import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')
    let activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    let activateViVewMode = () => {
        setEditMode(false)
        props.onChange(title);
    }
    let onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)

    }
    return (
        editMode
            ? <input value={title} onBlur={activateViewMode} onChange={onChangeTitleHandler} autoFocus/>
            : <span onDoubleClick={activateEditMode}>{props.title}</span>
    )

}