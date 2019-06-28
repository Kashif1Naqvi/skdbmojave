import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
       <div className="text-center" >
            <a href="https://www.facebook.com/syedkashifnaqvi.naqvi" target="_blank"  rel="noopener noreferrer" ><img src="https://image.flaticon.com/icons/svg/59/59439.svg" className="p-2 m-2 btn-light " width="40" alt=""/></a>
            <img src="https://image.flaticon.com/icons/svg/733/733635.svg" className="p-2 m-2 btn-light " width="40" alt="data"/>
            <img src="https://image.flaticon.com/icons/svg/133/133667.svg" className="p-2 m-2 btn-light " width="40" alt=""/>
            <nav className="p-3 m-3 navbar navbar-expand-md navbar-dark bg-grey">
                  <ul className="navbar-nav" style={{paddingLeft:"210px",margin:"5px" }} >
                        <Link className="nav-list-item nav-link text-secondary text-muted" to="/" >ABOUT US</Link>
                        <Link className="nav-list-item nav-link text-secondary text-muted" to="/our-team-mojave" >OUR TEAM</Link>
                        <Link className="nav-list-item nav-link text-secondary text-muted" to="/our-impact-mojave" >OUR IMPACT</Link>
                        <Link className="nav-list-item nav-link text-secondary text-muted" to="/volunteer-mojave" >VOLUNTEER</Link>
                        <Link className="nav-list-item nav-link text-secondary text-muted" to="/donate-mojave" >DONATE</Link>
                        <Link className="nav-list-item nav-link text-secondary text-muted" to="/contact-us-mojave">CONTACT US</Link>
                  </ul>
              </nav>
              <h1 className="text-center text-dark  " style={{fontSize:"15px",fontWeight:"bold"}} >POWERED BY SQUARESPACE</h1>
      </div>
    
    )
}
