import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
export class AdminHome extends Component {

  render() {
    return (
      <div>
        <h3 style={{color:'#fff'}}>Welcome Admin</h3> 
        <div className="mdl-card mdl-shadow--2dp" style={{display:'flex',flexDirection:'column',margin:40,borderRadius:10,padding:10}}> 
        <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
        onClick={()=>this.props.history.push('/issue')}>
        ISSUE CERTIFICATE 
        </button>
        <button 
        onClick={()=>this.props.history.push('/verify')}
        className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}>
        VERIFY RECORDS 
        </button>
        <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}>
        VIEW RECORDS
        </button>
        <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}>
        VIEW OBJECTIONS
        </button>
        <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}>
        VIEW MISMATCHES
        </button>
        </div>
      </div>
    )
  }
}

export default withRouter(AdminHome)
