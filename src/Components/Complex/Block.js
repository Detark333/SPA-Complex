import React from 'react'
import complex from "./Complex.module.css";
function Block(props) {
    return <div style={{width: '435px'}}>
            <p className={complex.textP}>{props.textP}</p>
            <p className={complex.textStyle}>{props.text}</p>
        </div>
}

export default Block