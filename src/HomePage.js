import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ReactLoading from 'react-loading';

export class HomePage extends Component {

  state={
    errorc:'',
    username:'',
    password:'',
    error:'',
    terms:false,
    loading:false,
  }

  onChange =(e)=>this.setState({[e.target.id]:e.target.value})
  onSubmit =(e)=>{
    e.preventDefault()
    const username = this.state.username.trim();
    const password = this.state.password.trim();
    if (username === '') { this.setState({error:'Enter Email/Username'});return;}
    if (password === '') { this.setState({error:'Enter Password'});return;}
    this.setState({error:''})
    if (username === 'sdoraipur@cg.gov.in' && password === '12345') {
      localStorage.setItem('auth',"true")
      this.setState({loading:true},()=>{
        setTimeout(()=>{
          this.props.history.push('/admin')
        },2000)
      })
    }else{
      this.setState({error:'Invalid Credentials'})
    }  
  }
  onSubmit1=(e)=>{
    e.preventDefault()
    const terms = this.state.terms;
    this.setState({errorc:'Please Accept The Terms and Conditions'},()=>{
    })
    this.setState({errorc:'Please Accept The Terms and Conditions'})
    if (terms) {
      this.setState({loading:true},()=>{
        setTimeout(()=>{
          this.props.history.push('/verify')
        },2000)
      })
      
    }else{
    }
  }
  render() {
    if (this.state.loading) {
      return (
          <div style={{width:'100%',height:"80vh",justifyContent:'center',alignItems:'center',display:'flex'}}>
        <ReactLoading type={'cubes'} color={'teal'}  height={70} width={150} />
        </div>
      )
  }
    return (
      <div>
           <h3 style={{color:'black'}}>Welcome To Caste Certificate Verification System</h3>
      <div style={{display:'flex',justifyContent:'center'}}> 
          <form action="#">
          <div className="mdl-card mdl-shadow--2dp" style={{display:'flex',flexDirection:'column',margin:40,height:'inherit',padding:10,borderRadius:10}}> 
            <h6 style={{color:'RGB(0,153,153)',marginTop:30}}>Admin Login</h6>
            <div style={{color:'red'}}>{this.state.error === '' ? '' : this.state.error}</div>
            <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
              <input className="mdl-textfield__input"  type="text" id="username"  value={this.state.username} onChange={(e)=>this.onChange(e)} />
              <label className="mdl-textfield__label" htmlFor="username">User ID</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password"  value={this.state.password} onChange={(e)=>this.onChange(e)}   id="password" />
              <label className="mdl-textfield__label" htmlFor="password" >Password</label>
            </div>
      <h6 style={{color:'RGB(0,153,153)'}}>Attach A Digital Signature</h6>
            <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="file" id="sample12"  />
              </div>

                <button className="mdl-button mdl-js-button"
                onClick={(e)=>this.onSubmit(e)} 
                style={{backgroundColor:'#dfdfdf'}}>
              Login
              </button>
        </div>
      </form>
      <div className="mdl-card mdl-shadow--2dp" style={{display:'flex',flexDirection:'column',margin:40,padding:10,borderRadius:10,justifyContent:'space-between'}}> 
          <h6 style={{color:'RGB(0,153,153)'}}>Citizen Login</h6>
          <div style={{color:'red'}}>{this.state.errorc === '' ? '' : this.state.error}</div>
          <img src="./citizen.png" style={{width:150,height:150}} alt="citizen"/>
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" 
          htmlFor="checkbox-1"
          style={{width:200,marginTop:10,fontSize:12}}>
          <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input"
          onChange={()=>this.setState({terms:!this.state.terms})}
          checked={this.state.terms} />
          <span className="">I Accept the <a>Terms & Conditions.</a></span>
        </label>
          <button className="mdl-button mdl-js-button" style={{backgroundColor:'#dfdfdf'}}
          onClick={(e)=>this.onSubmit1(e)}>
          PROCEED TO VERIFICATION
        </button>
        </div>
        </div> 
      </div>
    )
  }
}

export default withRouter(HomePage)
