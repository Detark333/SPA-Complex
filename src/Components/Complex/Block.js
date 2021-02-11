import React from 'react'
import complex from "./Complex.module.css";
import linkDetail from './Svg/LinkDetail.svg'
function Block(props) {
    return <>
            <p className={complex.textP}>{props.textP}</p>
            <p>
                <span className={complex.textStyle}>{props.text}</span>
                <span style={{marginTop: '10px', paddingTop: '20px'}}>
                    <img src={linkDetail} alt={'linkDetail'}/>
                </span>
            </p>
        </>
}

export default Block