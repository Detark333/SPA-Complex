import React, {useState} from 'react'
import todoItem from './TodoItem.module.css'
const TodoItem = (props) =>{
    const [text, setText] = useState(props.text)
    const changeTextHandler = (e) => {
        setText(e.target.value)
    }
    return <div className={todoItem.mainDiv}>
        <input value={text} type="text" onChange={changeTextHandler}/>
        <button>Remove</button>
    </div>
}

export default TodoItem;