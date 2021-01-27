import React from 'react'
import complex from './Complex.module.css'
const namesCategories = ["Архитектура","Благоустройство", "Безопасность", "Инженерия", "Инфраструктура", "Транспортная доступность"]

const Complex = () => {
    return <div style={{display: 'inline-flex', width: '100%',height: '100%'}}>
        <div style={{display: 'flex', flexGrow: '1',flexDirection: 'column',
            justifyContent: 'center'}}>
            <ul style={{paddingLeft: 0}}>
                {namesCategories.map((item)=> {
                return <li className={complex.liCategories}><span className={complex.spanCategories}>{item}</span></li>})}
            </ul>
        </div>
        <div style={{display: 'flex', flexGrow: '3', background: '#F0F0F0'}}>123</div>
        <div style={{display: 'flex', flexGrow: '3'}}>123</div>
    </div>
}

export default Complex