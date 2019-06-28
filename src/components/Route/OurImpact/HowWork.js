import React from 'react'
import {workObj} from './workObj'
export default function HowWork() {
  return (
   <div>
    {
      workObj.map((workObj,index)=>{
        return(
          <div key={index} className="container" >
            <h1 className="display-6 text-light text-muted " >{workObj.title}</h1>
            <p className="text-muted text-secondary "  >{workObj.description}</p>
          </div>
        )
      })
    }
   </div>
  )
}
