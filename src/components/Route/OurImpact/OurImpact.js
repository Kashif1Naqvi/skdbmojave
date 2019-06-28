import React, { Component } from 'react'
import Image1 from './Image1';
import HowWork from './HowWork';
import Image2 from './Image2';
import SecondImage from '../About/SecondImage';
import Grid from './Grid';
export default class OurImpact extends Component {
    render() {
        return (
            <div  >
                <div className="mb-5 container-fluid"><Image1 /></div>
                <div className="container section">
                    <h1 className="text-muted" >How we work</h1>
                   <HowWork />     
                </div>          
                <div className="container-fluid">
                    <Image2 />
                </div>
                <div className="container-fluid section">
                    <Grid />
                </div>
                <div className="section">
                    <SecondImage />
                </div>      
            </div>
        )
    }
}
