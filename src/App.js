import React,{Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import About from './components/Route/About/About';
import OurImpact from './components/Route/OurImpact/OurImpact';
import Team from './components/Route/Team';
import Volunteer from './components/Route/Volunteer/Volunteer';
import Donate from './components/Route/Donate/Donate';
import Contact from './components/Route/Contact/Contact';
import Footer from './Footer';
class App extends Component{
  render(){
    return(
      <Router>
         <div className="container-fluid">
          <header>
            <nav className="p-3 m-3 navbar navbar-expand-md navbar-dark ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar"  >
                  <span className="navbar-toggler-icon btn-light bg-secondary text-white "></span>
                </button>
              <div className="navbar-collapse collapse" id="collapsingNavbar">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link text-secondary   " to="/" >ABOUT US</Link>
                      </li>
                      <li className="nav-item  ">
                        <Link className="nav-link text-secondary " to="/our-impact-mojave" >OUR IMPACT</Link>
                      </li>
                      <li className="nav-item  ">
                        <Link className="nav-link text-secondary " to="/our-team-mojave" >OUR TEAM</Link>
                      </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-logo mx-auto">
                      <Link className="nav-link text-dark  " to="/" >MOJAVE</Link>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item  ">
                        <Link className="nav-link text-secondary " to="/volunteer-mojave" >VOLUNTEER</Link>
                    </li>
                    <li className="nav-item  ">
                        <Link className="nav-link text-secondary " to="/donate-mojave" >DONATE</Link>
                    </li>
                    <li className="nav-item  ">
                        <Link className="nav-link text-secondary " to="/contact-us-mojave">CONTACT US</Link>
                    </li>
                  </ul>
                
              </div>
              </nav>
          </header>
            <Route exact path="/" component={About} />
            <Route  path="/our-impact-mojave" component={OurImpact} />
            <Route  path="/our-team-mojave" component={Team} />
            <Route  path="/volunteer-mojave" component={Volunteer} />
            <Route  path="/donate-mojave" component={Donate} />
            <Route  path="/contact-us-mojave" component={Contact} />
            <div className="container">
              <Footer />
            </div>
          </div> 
      </Router>
         
    )
  }
}
export default App

