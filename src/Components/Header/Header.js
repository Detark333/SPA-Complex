import React, {useRef, useState} from 'react'
import header from './Header.module.css'
import {Link} from "react-router-dom";
const menuItems = [{name: "О КОМПЛЕКСЕ", link: '/Complex'}, {name: "Особенности", link: '/Penthouses'}, {name: "ПЕНТХАУСЫ", link: '/Penthouses'}, {name: "ВЫБРАТЬ КВАРТИРУ", link: '/Penthouses'}]
const menuSpanWidth=[{left: 0, width:104}, {left: 148, width: 111} , {left: 301, width:89}, {left: 433, width:138}]
const Header = () => {
    const [position , setPosition] = useState({left: 295, width:89})
    const positionStatic = useRef({left: 295, width:89})
    return <header className={header.mainDiv}>
        <div style={{display: 'inline-flex', marginTop: '55px'}}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '25px'}}>
                <rect width="70" height="70" fill="#262525"/>
            </svg>
            <div className={header.textAroundAges}>Первомайская</div>
        </div>
        <div>
            <ul className={header.linkStyles}>
                {menuItems.map((item, index) => {
                    return <Link className={index + 1 === menuItems.length? header.rightMenuItems: header.menuItems} key={index} to={item.link + '/0'} onClick={() =>{
                        positionStatic.current = menuSpanWidth[index]
                        setPosition(menuSpanWidth[index])}}
                                 onMouseEnter=
                                     {
                                        () => {
                                            // setPosition(
                                            //     pervState => {
                                            //         if(pervState.left < menuSpanWidth[index]){
                                            //             return {
                                            //                 left: pervState.left,
                                            //                 width: menuSpanWidth[index].left - pervState.left + menuSpanWidth[index].width
                                            //             }
                                            //         }
                                            //     }
                                            // )
                                            if(position.left < menuSpanWidth[index].left){
                                                // setPosition(menuSpanWidth[index])
                                                // setPosition(
                                                //     {
                                                //         left: position.left,
                                                //         width: menuSpanWidth[index].left - position.left + menuSpanWidth[index].width
                                                //     }
                                                // )
                                                setPosition(
                                                    {
                                                        left: position.left,
                                                        width: menuSpanWidth[index].left - position.left + menuSpanWidth[index].width
                                                    }
                                                )
                                            } else if(position.left > menuSpanWidth[index].left) {
                                                setPosition(
                                                    {
                                                        left: menuSpanWidth[index].left,
                                                        width: position.left - menuSpanWidth[index].left + position.width
                                                    }
                                                )
                                            }
                                        }
                                     }
                                 onMouseLeave={()=> setPosition(positionStatic.current)}
                    >{item.name}</Link>
                })}
            </ul>
            <div className={header.wayLand} style={{left: position.left + 'px', width: position.width + 'px'}}> </div>

        </div>
        <div style={{display: 'inline-flex', marginTop: '55px'}}>
            <div className={header.textAroundAges}>8 888 888 88 88</div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '25px'}}>
                <rect width="70" height="70" fill="#262525"/>
            </svg>
        </div>
    </header>
}

export default Header