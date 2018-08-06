import React, { Component } from 'react'
import ReactLoading from 'react-loading';
import moment from 'moment'
import md5 from 'js-md5';
import { withRouter } from 'react-router-dom'
export class IssueCertificate extends Component {
  state= {
    doi:'',
    subdiv:'',
    booknumber:'',
    proofnumber:'',
    csn:'',
    name:'',
    so:'',
    resident:'',
    patwari:'',
    block:'',
    tehsil:'',
    district:'',
    division:'',
    caste:'',
    serial:'',
    annual:'',
    cert:true,
    loading:1,
    dobp:'',
    sa:'',
    hash:'',
    myloading:false,
  }
  onChange =(e)=>this.setState({[e.target.id]:e.target.value})
  clear = (e)=>{
    e.preventDefault()
    this.setState({ doi:'',subdiv:'',booknumber:'',proofnumber:'',csn:'',name:'',
    so:'',resident:'',patwari:'',block:'',tehsil:'',district:'',division:'',
    caste:'',serial:'',annual:''})
  }

  showSnackBar(msg){
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var data = {message: msg};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    if (this.state.doi === '') {this.showSnackBar('enter Date OF Issue'); return }
    if (this.state.subdiv === '') {this.showSnackBar('enter Sub division'); return }
    if (this.state.booknumber === '') {this.showSnackBar('enter Book Number'); return }
    if (this.state.proofnumber === '') {this.showSnackBar('enter Proof Number'); return }
    if (this.state.csn === '') {this.showSnackBar('enter Current Serial Number'); return }
    if (this.state.name === '') {this.showSnackBar('enter Name'); return }
    if (this.state.so === '') {this.showSnackBar('Enter So/ D0'); return }
    if (this.state.resident === '') {this.showSnackBar('enter Resident'); return }
    if (this.state.patwari === '') {this.showSnackBar('enter Patwari'); return }
    if (this.state.block === '') {this.showSnackBar('enter block'); return }
    if (this.state.tehsil === '') {this.showSnackBar('enter Tehsil'); return }
    if (this.state.district === '') {this.showSnackBar('enter District'); return }
    if (this.state.division === '') {this.showSnackBar('enter division'); return }
    if (this.state.caste === '') {this.showSnackBar('enter Caste'); return }
    if (this.state.serial === '') {this.showSnackBar('enter Serial Number'); return }
    if (this.state.annual === '') {this.showSnackBar('enter Annual Income'); return }
    this.setState({myloading:true},()=>{
        setTimeout(()=>{
            this.setState({myloading:false,cert:false}) 
        },2000)
      })
    
  }
  autoFill = (e)=>{
    e.preventDefault()
    const autoFill ={
      doi:'27/3/2013',subdiv:'Arang',booknumber:'65',proofnumber:'23',csn:'15',name:'Rohit Dhruv',
      so:'Purohit Dhruv',resident:'Arang',patwari:'12',block:'Arang',tehsil:'Arang',district:'Raipur',division:'Raipur',
      caste:'GOND',serial:'3546545',annual:'100000',
    }
    this.setState(autoFill)
  }
  render() {
    if (this.state.myloading) {
        return (
            <div style={{width:'100%',height:"80vh",justifyContent:'center',alignItems:'center',display:'flex'}}>
          <ReactLoading type={'cubes'} color={'teal'}  height={70} width={150} />
          </div>
        )
    }
  
    return (
      <div>
          <h3 style={{color:'#000'}}>CERTIFICATE ISSUE</h3> 
       {
           this.state.cert ? 
        <form onSubmit={(e)=>this.handleSubmit(e)} style={{backgroundColor:'#fff',width:'40%',borderRadius:10,padding:10}} className="mdl-shadow--2dp">

            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>Date Of Issue</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" type="date" value={this.state.doi} id="doi" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>SUB - DIVISION</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.subdiv} id="subdiv" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>BOOK NUMBER</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.booknumber} id="booknumber" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>PROOF NUMBER</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.proofnumber} id="proofnumber" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>CURRENT SERIAL NUMBER</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.csn} id="csn" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>NAME </div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.name} id="name" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>S/O – W/O</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.so} id="so" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>RESIDENT</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.resident} id="resident" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>PATWARI HALKA</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.patwari} id="patwari" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>BLOCK</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.block} id="block" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>TEHSIL</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.tehsil} id="tehsil" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>DISTRICT</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.district} id="district" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>DIVISION</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.division} id="division" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>CASTE</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.caste} id="caste" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>SERIAL</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.serial} id="serial" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>ANNUAL INCOME</div>
                <input required style={{flex:1}}  className="mdl-textfield__input" value={this.state.annual} id="annual" onChange={(e)=>this.onChange(e)} />
            </div>

          <div>
         <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={(e)=>this.handleSubmit(e)} type="submit">
          PREVIEW CERTIFICATE 
          </button>
              <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={(e)=>this.autoFill(e)} type="button">
          Auto Fill 
          </button>
              <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={(e)=>this.clear(e)} type="button">
         Clear 
          </button>
          </div>

         
       </form>
       :
       <div>
       <div style={{backgroundColor:'#fff',width:'30%',border:'2px solid green',borderRadius:10,padding:5}} className="mdl-shadow--2dp">
         <div style={{backgroundColor:'#fff',border:'1px solid green',borderRadius:10,padding:10}}>
            <div style={{display:'flex'}}>
            <img src="./cglogo.jpg" style={{width: 80, height: 80, borderRadius: '50%'}} alt="CG" />
            <div style={{flex:1,color:'red',flexDirection:'column'}}>
              <u>TRIBAL DEPARTMENT CHHATTISGARH</u>
              <div style={{color:'black',fontSize:18,marginTop:10}}>CASTE CERTIFICATE</div>
            </div>
            </div>
            <div style={{display:'flex',marginTop:10,flexDirection:'column',textAlign:'left'}}>
            <p style={{fontWeight:700}}>THIS IS TO CERTIFY THAT <u>MR {this.state.name === ''  ? 'DIPANSHU DHRUW' : this.state.name }</u>FATHER’S NAME <u>MR. {this.state.so=== ''? 'LALCHAND DHRUW': this.state.so}</u> RESIDENT OF {this.state.resident ==='' ?  'BHILAI' : this.state.resident} REVENUE RECORD NUMBER {this.state.patwari=== ''?  '11' : this.state.patwari } BLOCK {this.state.block === '' ?  'DURG' : this.state.block} TEHSIL {this.state.tehsil === '' ? "DURG" : this.state.tehsil} IS A MEMBER OF SCHEDULED TRIBE/CASTE  IS DENOTED IN CONSTITUTION AT ARTICLE  341/<u>342</u> WHICH HAS BEEN BROUGHT UNDER CHHATTISGARH STATE’S LIST OF SCHEDULED CASTE/TRIBES AND THIS <u>{ this.state.caste === '' ? 'GOND' : this.state.caste }</u> CASTE/TRIBE UNDER SCHEDULED CASTE AND SCHEDULED TRIBES ORDER (AMENDMEND) ACT, 1976  COMES AT SERIAL NUMBER <u>{this.state.serial === '' ? '16' : this.state.serial}</u>. HENCE MR {this.state.name === '' ?  'DIPANSHU DHRUW' : this.state.name} FATHER’S NAME MR {this.state.so === '' ? 'LALCHAND DHRUW' : this.state.so} BELONGS TO SCHEDULED CASTE/TRIBE.</p>
            <p style={{fontWeight:700}}>THIS CERTIFIES THAT ANNUAL INCOME OF FAMILY OF DIPANSHU DHRUW IS {this.state.annual === ''?  '250000' : this.state.annual}/-.</p>
            </div>
            <div style={{display:'flex',marginTop:10,flexDirection:'row',textAlign:'left'}}>
              <div style={{display:'flex',marginTop:10,flexDirection:'column',textAlign:'left'}}>
                <u style={{margin:5,fontSize:10}}>Date OF ISSUE:- {this.state.doi}</u>
                <u style={{margin:5,fontSize:10}}>Date OF BLOCK PROOF:{this.state.dobp}</u>
                <u style={{margin:5,fontSize:10}}>SIGNING AUTHORITY:{this.state.sa}</u>
              </div>
              <div style={{display:'flex',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                  {
                  this.state.loading === 1 ? null:
                  this.state.loading === 2? 
                        <div style={{width:200,height:100,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                      <ReactLoading type={'cubes'} color={'teal'} height={40} width={80} />
                      <p style={{position:'absolute',bottom:0}}>Writing on Blockchain</p>
                      </div>
                      :
                  <img src="./qrcode.png" alt="qrcode"  style={{Width:70,height:70}} />
                  }
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',textAlign:'right'}}>
            <p style={{fontSize:10,margin:0}}>{this.state.loading === 3 ? this.state.hash : ''}</p>
            </div>

          </div>
          </div>
          <div>
        { this.state.loading === 3 ? null : <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={()=>this.setState({loading:2},()=>{
              setTimeout(()=>{
                  let dobp = moment(new Date()).format('DD-MM-YYYY-hh-mm')+' / '+ moment(new Date()).format('hh-mm')
                  let {doi,subdiv,booknumber,proofnumber,csn,name,so,resident,patwari,block,tehsil,district,division,caste,serial,annual}= this.state
                  let data = {doi,subdiv,booknumber,proofnumber,csn,name,so,resident,patwari,block,tehsil,district,division,caste,serial,annual}
                  var hash = md5(JSON.stringify(data));
                  let storageData ={
                      hash,data
                  }
                  const mydata = JSON.parse(localStorage.getItem("mydata"));
                 if (mydata === null) {
                     let array = [storageData]
                    localStorage.setItem('mydata',JSON.stringify(array))
                 }else{
                     mydata.push(storageData)
                     localStorage.setItem('mydata',JSON.stringify(mydata))
                 }
                 console.log(mydata);
                  this.setState({loading:3,dobp,sa:'SDO Raipur',hash})
              },5000)
                })}>
                ISSUE CERTIFICATE
                </button>}

               {this.state.loading === 3 ? 
                <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
                onClick={(e)=>this.showSnackBar('Print krna hai')}>
                Print 
                </button>
                :
               <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
                onClick={(e)=>this.setState({cert:true})}>
                Edit 
                </button>
                } 

                {this.state.loading === 3 ?
                <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
                onClick={(e)=>this.setState({cert:true,loading:1},()=>{
                    this.props.history.push('/admin')
                })}>
                GO Back
                </button>
                :
                <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
                onClick={(e)=>this.setState({cert:true,loading:1},()=>{
                    this.props.history.push('/admin')
                })}>
                Cancel
                </button>
            }
                </div>
            </div>
       }
       
      </div>
    )
  }
}

export default withRouter(IssueCertificate)
