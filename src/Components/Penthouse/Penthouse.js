import React from 'react'
import penthouse from './Penthouse.module.css'
import TodoItem from "./TodoItem/TodoItem";
import UpdateList from "./TodoItem/UpdateList";
const information = [
    {id: 0, text: ""},
    {id: 1, text: ""},
    {id: 2, text: ""},
    {id: 3, text: ""}
    ]
const Penthouse = () => {

    return <div className={penthouse.mainDiv}>
        <div className={penthouse.containerDiv}>
            {information.map((item) => {
                return <TodoItem key={item.id} text={item.text}/>
            })}
            <UpdateList/>
        </div>
    </div>
}

export default Penthouse