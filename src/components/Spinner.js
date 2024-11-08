import React, { Component } from 'react'
import loading from "../assets/Spinner@1x-1.8s-200px-200px.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-4">
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
