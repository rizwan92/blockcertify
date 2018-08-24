import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ReactLoading from 'react-loading';

export class AdminHome extends Component {
  state={
    loading:false
  }

  render() {
    if (this.state.loading) {
      return (
          <div style={{width:'100%',height:"80vh",justifyContent:'center',alignItems:'center',display:'flex'}}>
        <ReactLoading type={'spinningBubbles'} color={'teal'}  height={70} width={150} />
        </div>
      )
  }

    return (
      <div>
        <h3 style={{color:'#000'}}>Welcome Admin</h3> 
        <div className="mdl-card mdl-shadow--2dp" style={{display:'flex',flexDirection:'column',margin:40,borderRadius:10,padding:10}}> 
        <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
        onClick={()=>{
          this.setState({loading:true},()=>{
            setTimeout(()=>{
              this.props.history.push('/issue')
            },2000)
          })
          }}>
        ISSUE CERTIFICATE 
        </button>
        <button 
        onClick={()=>{
          this.setState({loading:true},()=>{
            setTimeout(()=>{
              this.props.history.push('/verify')
            },2000)
          })
        }}
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
