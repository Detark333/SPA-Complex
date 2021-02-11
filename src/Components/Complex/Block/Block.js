import React from 'react'
import block from "./Block.module.css";
import linkDetail from '../Svg/LinkDetail.svg'

function Block(props) {
    return <>
        <p className={block.textP}>{props.textP}</p>
        <p>
            <span className={block.textStyle}>{props.text}</span>
            <span className={block.spanStyle}>
                    <img src={linkDetail} alt={'linkDetail'} className={block.img}/>
                </span>
        </p>
    </>
}

export default Block