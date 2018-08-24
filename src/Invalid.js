import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
export class Invalid extends Component {
  render() {
    return (
      <div>
          <div>
            <h3 style={{color:'#000'}}>THIS CERTIFICATE IS INVALID !</h3> 
            <h6 style={{color:'#000'}}>AN AUTO GENERATED REPORT ABOUT THE MISMATCH HAS BEEN SENT TO THE ADMIN. DO YOU WANT TO FURTHER REPORT THE PROBLEM? !</h6> 
          </div>
          <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
                onClick={(e)=>{}}>
                Yes
                </button>
                <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
                onClick={(e)=> this.props.history.goBack()}>
                Take Me Back
                </button>
      </div>
    )
  }
}

export default withRouter(Invalid)
