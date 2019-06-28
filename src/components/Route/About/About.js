import React, { Component } from 'react'
import Mission from './Mission';
import Goal from './Goal'
import Image from './Image'
import History from './History'
import SecondImage from './SecondImage'
export default class About extends Component {
    render() {
        return (
            <div className="container-fluid">
                <section className="section " style={{backgroundImage:"url(https://images.pexels.com/photos/2519213/pexels-photo-2519213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)", backgroundSize:"cover",height:"899px",width:"100%",  maxWidth:" 100%" ,backgroundAttachment:"fixed",paddingTop:"260px",marginTop:"40px",  }}  > 
                  <h1 style={{fontWeight:"bold",textShadow:"2px 2px white" }} className="p-3 text-light text-center font-weight-90 display-1 " >Dedicated to the conservation and <br /> care of the Mojave Desert</h1>
                </section>
                <section className="section" >
                    <Mission />
                </section>
                <section className="section">
                    <Goal />
                </section>
                <section className="section">
                    <Image />
                </section>
                <section className="section">
                    <History />
                </section>
                <section className="section">
                    <SecondImage />
                </section>
            </div>
        )
    }
}
