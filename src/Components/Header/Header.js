import React from 'react'
import header from './Header.module.css'
import {Link} from "react-router-dom";
const menuItems = [{name: "О КОМПЛЕКСЕ", link: '/Complex'}, {name: "Особенности", link: '/Penthouses'}, {name: "ПЕНТХАУСЫ", link: '/Penthouses'}, {name: "ВЫБРАТЬ КВАРТИРУ", link: '/Penthouses'}]
const Header = () => {
    return <header className={header.mainDiv}>
        <div style={{display: 'inline-flex', marginTop: '55px'}}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '25px'}}>
                <rect width="70" height="70" fill="#262525"/>
            </svg>
            <div className={header.textAroundAges}>Первомайская</div>
        </div>
        <ul className={header.likStyles}>
            {menuItems.map((item, index) => {
                return <Link className={index + 1 === menuItems.length? null: header.menuItems} key={index} to={item.link}>{item.name}</Link>
            })}
        </ul>
        <div style={{display: 'inline-flex', marginTop: '55px'}}>
            <div className={header.textAroundAges}>8 888 888 88 88</div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '25px'}}>
                <rect width="70" height="70" fill="#262525"/>
            </svg>
        </div>
    </header>
}

export default Header