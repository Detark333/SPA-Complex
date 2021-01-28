import React, {useState} from 'react'
import complex from './Complex.module.css'
import {NavLink, Route, Switch} from "react-router-dom";
import Block from "./Block";
import architecture from './Svg/Architecture.svg'
import safety from './Svg/Safety.svg'
import engineering from './Svg/Engineering.svg'
import transport from './Svg/Transport.svg'
import landscaping from './Svg/Landscaping.svg'
import infrastructure from './Svg/Infrastructure.svg'
import {Animated} from "react-animated-css";

const namesCategories = [
    {name: 'Архитектура', svg: <img src={architecture} alt="architecture" />, link: 'Architecture', text: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'},
    {name: "Благоустройство", svg: <img src={landscaping} alt="landscaping" />, link: 'Landscaping', text: 'Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом'},
    {name: "Безопасность", svg: <img src={safety} alt="safety" />, link: 'Safety', text: 'Современный двор европейского уровня - территория для детей, игр на свежем воздухе и вечерних'},
    {name: "Инженерия", svg: <img src={engineering} alt="engineering" />, link: 'Engineering', text: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'},
    {name: "Инфраструктура", svg: <img src={infrastructure} alt="infrastructure" />, link: 'Infrastructure', text: 'Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса'},
    {name: "Транспортная доступность", svg: <img src={transport} alt="transport" />, link: 'Transport', text: 'Жилой комплекс «Первомайская» расположен в престижном Академическом районе'}]
const Complex = () => {
    const [s, st] = useState(false)
    return <div className={complex.mainDiv}>
        <div className={complex.linkDiv}>
            <ul className={complex.ul}>
                {namesCategories.map((item, index)=> {
                return <li key={index} className={complex.liCategories}><NavLink className={complex.spanCategories} activeClassName={complex.spanCategoriesActive} to={'/Complex/' + index}>{item.name}</NavLink></li>})}
            </ul>
        </div>
        <div className={complex.informationDiv}>
            <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={800} animationOutDuration={800} isVisible={s}>
                {/*<Switch>*/}
                {/*    <Route*/}
                {/*        path="/Complex/:number"*/}
                {/*        render={props => <Block textP={namesCategories[props.match.params.number].name} text={namesCategories[props.match.params.number].text} {...props} />}*/}
                {/*    />*/}
                {/*</Switch>*/}
                <div>123123123123123123123123123123</div>
            </Animated>

        </div>
        <Switch>
            <Route
                path="/Complex/:number"
                render={props => namesCategories[props.match.params.number].svg}
            />
        </Switch>
    </div>
}

export default Complex