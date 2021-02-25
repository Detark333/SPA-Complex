import React from 'react'
import todoItem from './TodoItem.module.css'
const UpdateList = () =>{
    return <div className={todoItem.mainDiv}>
        <input type="text"/>
        <button>Add</button>
    </div>
}

export default UpdateList;