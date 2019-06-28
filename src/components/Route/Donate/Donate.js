import React, { Component } from 'react'
import Form from './Form';

export default class Donate extends Component {
  render() {
    return (
      <div className="container" >
        <h1 className="text-dark" >Any amount helps us achieve our goals</h1>
        <p className="mt-4 pt-3 text-muted " >The following text is placeholder known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Form />
      </div>
    )
  }
}
