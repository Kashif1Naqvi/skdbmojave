import React, { Component } from 'react'
import Form from './Form';

export default class Contact extends Component {
  render() {
    return (
      <div className="container" >
        <h1 className="text-muted">We'd love to hear from you</h1>
        <p className="text-muted">The following text is placeholder known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="mapouter"><div className="gmap_canvas">
          <iframe width="903" height="567" title="iframe" id="gmap_canvas" src="https://maps.google.com/maps?q=lahore%20herbancepura&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div>
        </div>
        <Form />
      </div>
    )
  }
}
