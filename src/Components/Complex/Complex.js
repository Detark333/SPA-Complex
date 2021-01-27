import React from 'react'

const Complex = () => {
    return <div style={{display: 'inline-flex', width: '100%',height: '100%'}}>
        <div style={{display: 'flex', flexGrow: '1'}}>123</div>
        <div style={{display: 'flex', flexGrow: '3', background: '#F0F0F0'}}>123</div>
        <div style={{display: 'flex', flexGrow: '3'}}>123</div>
    </div>
}

export default Complex