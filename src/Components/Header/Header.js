import React, {useRef, useState} from 'react'
import header from './Header.module.css'
import {Link} from "react-router-dom";
import {burger, block} from '../Complex/Svg/'

const menuItems = [
    {name: "О КОМПЛЕКСЕ", link: '/Complex'},
    {name: "Особенности", link: '/Penthouses'},
    {name: "ПЕНТХАУСЫ", link: '/Penthouses'},
    {name: "ВЫБРАТЬ КВАРТИРУ", link: '/Penthouses'}
    ]
const menuSpanWidth = [
    {left: 0, width: 104},
    {left: 148, width: 111},
    {left: 301, width: 89},
    {left: 433, width: 138}
    ]

const Header = (props) => {
    const [position, setPosition] = useState(
        () => {
        if (props.path === '/Penthouses/0' || props.path === '/') {
            return {left: 301, width: 89}
        } else {
            return {left: 0, width: 104}
        }
    })
    const positionStatic = useRef(
        () => {
            if (props.path === '/Penthouses/0') {
                return {left: 295, width: 89}
            } else {
                return {left: 0, width: 104}
            }
        }
    )
    return <header className={header.header}>
        <div className={header.divBurger}>
            <img src={block} alt="block" className={header.imgLeft}/>
            <div className={header.textAroundAges}>Первомайская</div>
        </div>
        <div>
            <ul className={header.linkStyles}>
                {menuItems.map((item, index) => {
                    return <Link className={index + 1 === menuItems.length ? header.rightMenuItems : header.menuItems}
                                 key={index} to={item.link + '/0'} onClick={() => {
                                    positionStatic.current = menuSpanWidth[index]
                                    setPosition(menuSpanWidth[index])
                                 }}
                                 onMouseEnter={
                                     () => {
                                         if (position.left < menuSpanWidth[index].left) {
                                             setPosition(
                                                 {
                                                     left: position.left,
                                                     width: menuSpanWidth[index].left - position.left + menuSpanWidth[index].width
                                                 }
                                             )
                                         } else if (position.left > menuSpanWidth[index].left) {
                                             setPosition(
                                                 {
                                                     left: menuSpanWidth[index].left,
                                                     width: position.left - menuSpanWidth[index].left + position.width
                                                 }
                                             )
                                         }
                                     }
                                 }
                                 onMouseLeave={() => setPosition(positionStatic.current)}
                                >{item.name}</Link>
                })}
            </ul>
            <div className={header.wayLand} style={{left: position.left + 'px', width: position.width + 'px'}}> </div>

        </div>
        <div className={header.divBurger}>
            <div className={header.textAroundAges}>8 888 888 88 88</div>
            <img src={burger} alt="burger" className={header.imgRight}/>
        </div>
    </header>
}

export default Header