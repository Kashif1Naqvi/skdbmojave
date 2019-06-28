import React from 'react'
import {historyObj} from './historyObj'
export default function History() {
    return (
        <div  className="container">
            <h1 className="display-5 text-secondary text-muted">{historyObj.title}</h1>
            <p className="text-muted text-secondary">{ historyObj.description1 }</p>
            <p className="text-muted text-secondary">{ historyObj.description2 }</p>
        </div>
    )
}
