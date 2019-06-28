import React from 'react'
import './style.css'
export default function SecondImage() {
    return (
      <section className="section" style={{backgroundImage:"url(https://images.pexels.com/photos/1534057/pexels-photo-1534057.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260)", backgroundSize:"cover",height:"899px",backgroundAttachment:"fixed",paddingTop:"260px",marginTop:"40px"  }}  > 
        <h1 className="p-3 text-light text-center  display-5 " style={{fontWeight:"bold",textShadow:"2px 2px white" }} >READY TO HELP?</h1>
        <h1 className="p-3 text-light text-center  display-1 " style={{fontWeight:"bold",textShadow:"2px 2px white" }}  >Volunteer</h1>
        <div className="row">
            <div className="col text-center">
                <button className="btn btn-outline-light btn-lg">JOIN TODAY</button>
            </div>
        </div>
        <p className="pt-2 mt-2 text-center text-light display-3" >-</p>
        <h1 className="p-3 text-light text-center  display-1">Donate</h1>
        <div className="row">
            <div className="col text-center">
                <button className="btn btn-outline-light btn-lg">DONATE TODAY</button>
            </div>
        </div>
      </section>
    )
}
