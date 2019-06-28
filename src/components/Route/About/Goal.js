import React from 'react'
import {goalObj} from './goalObj'
import GoalList from './GoalList'
export default function Goal() {
    let objList = goalObj.descriptions.map((obj,index)=> <GoalList goal={obj} key={index} />)
    return (
        <div className="container">
            <h1 className="text-muted" >Goal</h1>
            <p className="text-muted" >{goalObj.title}</p>
            <div className="row">
                {objList}
            </div>
        </div>
    )
}
