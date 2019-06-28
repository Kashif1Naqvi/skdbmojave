import React from 'react'

export default function GoalList(props) {
    let goal = props.goal
    return (
        <div className="col col-sm-3 col-lg-3 col-md-3 col-xl-3 " >
            <h6 className="ml-5 text-muted">{goal.number}</h6>
            <p className="ml-5" >{goal.display}</p>
            <p className="ml-5 text-muted">{goal.content}</p>
        </div>
    )
}
