import React, {useRef} from 'react'
import complex from './Complex.module.css'
import './Complex.module.css'
import {NavLink, Route} from "react-router-dom";
import Block from "./Block";
import architecture from './Svg/Architecture.svg'
import safety from './Svg/Safety.svg'
import engineering from './Svg/Engineering.svg'
import transport from './Svg/Transport.svg'
import landscaping from './Svg/Landscaping.svg'
import infrastructure from './Svg/Infrastructure.svg'
import { CSSTransition } from 'react-transition-group';
const namesCategories = [
    {name: 'Архитектура', svg: <img style={{position: 'absolute', overflow: 'hidden'}} src={architecture} alt="architecture" />, link: 'Architecture', text: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни', path: '/Complex/0'},
    {name: "Благоустройство", svg: <img style={{position: 'absolute', overflow: 'hidden'}} src={landscaping} alt="landscaping" />, link: 'Landscaping', text: 'Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом', path: '/Complex/1'},
    {name: "Безопасность", svg: <img style={{position: 'absolute', overflow: 'hidden'}} src={safety} alt="safety" />, link: 'Safety', text: 'Современный двор европейского уровня - территория для детей, игр на свежем воздухе и вечерних', path: '/Complex/2'},
    {name: "Инженерия", svg: <img style={{position: 'absolute', overflow: 'hidden'}} src={engineering} alt="engineering" />, link: 'Engineering', text: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни', path: '/Complex/3'},
    {name: "Инфраструктура", svg: <img style={{position: 'absolute', overflow: 'hidden'}} src={infrastructure} alt="infrastructure" />, link: 'Infrastructure', text: 'Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса', path: '/Complex/4'},
    {name: "Транспортная доступность", svg: <img style={{position: 'absolute', overflow: 'hidden'}} src={transport} alt="transport" />, link: 'Transport', text: 'Жилой комплекс «Первомайская» расположен в престижном Академическом районе', path: '/Complex/5'}]

const Complex = () => {
    const indexMassive = useRef(0);
    return <div className={complex.mainDiv}>
        <div className={complex.linkDiv}>
            <ul className={complex.ul}>
                {namesCategories.map((item, index)=> {
                return <li key={index} className={complex.liCategories}><NavLink className={complex.spanCategories} activeClassName={complex.spanCategoriesActive} to={item.path} exact>{item.name}</NavLink></li>})}
            </ul>
        </div>
        <div className={complex.informationDiv}>
            {namesCategories.map(({path}, index) => (
                <Route key={path} exact path={path}>
                    {({match}) => {
                        return <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames={{
                                enter: complex.pageEnter ,
                                enterActive: complex.pageEnterActive,
                                exit: complex.pageExit,
                                enterExitActive: complex.pageExitActive,
                            }}
                            onEntered={()=>{indexMassive.current = index; console.log(indexMassive.current)}}
                            unmountOnExit
                        >
                            <div className={complex.page}>
                                <Block textP={namesCategories[index].name} text={namesCategories[index].text} />
                            </div>
                        </CSSTransition>
                    }}
                </Route>
            ))}
        </div>
        <div>
            {namesCategories.map(({path}, index) => (
                <Route key={path} exact path={path}>
                    {({match}) => (
                            <div className={complex.imgDiv}>
                                <CSSTransition
                                    in={match != null}
                                    timeout={500}
                                    classNames={{
                                        enter: complex.imgEnter,
                                    }}
                                    unmountOnExit
                                >
                                    {namesCategories[index].svg}
                                </CSSTransition>
                            </div>
                    )}
                </Route>
            ))}
        </div>
    </div>
}

export default Complex