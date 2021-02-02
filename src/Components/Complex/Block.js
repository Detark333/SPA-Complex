import React from 'react'
import complex from "./Complex.module.css";
function Block(props) {
    return <>
            <p className={complex.textP}>{props.textP}</p>
            <p className={complex.textStyle}>{props.text}</p>
        </>
}

export default Block