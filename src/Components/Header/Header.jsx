import React from 'react'
import header from '../../Styles/Header.module.css'
import {Link} from "react-router-dom";
const menuItems = ["О КОМПЛЕКСЕ", "ОСОБЕННОСТИ", "ПЕНТХАУСЫ", "ВЫБРАТЬ КВАРТИРУ"]
const Header = () => {
    return <header className={header.mainDiv}>
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{float:"left", marginRight: "23px", marginTop: "2.32px", marginLeft: "24px", position: "relative"}}>
            <rect width="70" height="70" fill="#262525"/>
        </svg>
        <div className={header.textAroundAges}>Первомайская</div>
        <ul className={header.likStyles}>
            {menuItems.map((item, index) => {
                return <Link className={index + 1 === menuItems.length? null: header.menuItems} key={index} to={'/123'}>{item}</Link>
            })}
        </ul>
        <div className={header.textAroundAges}>8 888 888 88 88</div>
    </header>
}

export default Header