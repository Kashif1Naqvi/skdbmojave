import React from 'react'
import {missionObj} from './missionObj'
export default function Mission() {
    return (
        <div className="container" >
            <h1 className="display-5 text-light text-muted " >{missionObj.title}</h1>
            <p className="text-muted text-secondary "  >{missionObj.description}</p>
        </div>
    )
}
