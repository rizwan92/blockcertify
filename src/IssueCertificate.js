import React, { Component } from 'react'

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
    cert:false
  }
  onChange =(e)=>this.setState({[e.target.id]:e.target.value})
  clear = (e)=>{
    e.preventDefault()
    this.setState({ doi:'',subdiv:'',booknumber:'',proofnumber:'',csn:'',name:'',
    so:'',resident:'',patwari:'',block:'',tehsil:'',district:'',division:'',
    caste:'',serial:'',annual:''})
  }
  autoFill = (e)=>{
    e.preventDefault()
    const autoFill ={
      doi:'27/3/2013',subdiv:'something',booknumber:'123456789',proofnumber:'789456',csn:'679871684',name:'Rohit Dhruv',
      so:'Purohit Dhruv',resident:'Raipur',patwari:'SYAMPAL',block:'Raipur',tehsil:'Raipur',district:'Raipur',division:'Raipur',
      caste:'GOD',serial:'3546545',annual:'10000',
    }
    this.setState(autoFill)
  }
  render() {
    return (
      <div>
          <h3 style={{color:'#fff'}}>CERTIFICATE ISSUE</h3> 
       {
           this.state.cert ? 
        <form style={{backgroundColor:'#fff',width:'40%',borderRadius:10,padding:10}} className="mdl-shadow--2dp">

            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>Date Of Issue</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.doi} id="doi" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>SUB - DIVISION</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.subdiv} id="subdiv" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>BOOK NUMBER</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.booknumber} id="booknumber" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>PROOF NUMBER</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.proofnumber} id="proofnumber" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>CURRENT SERIAL NUMBER</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.csn} id="csn" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>NAME </div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.name} id="name" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>S/O – W/O</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.so} id="so" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>RESIDENT</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.resident} id="resident" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>PATWARI HALKA</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.patwari} id="patwari" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>BLOCK</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.block} id="block" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>TEHSIL</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.tehsil} id="tehsil" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>DISTRICT</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.district} id="district" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>DIVISION</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.division} id="division" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>CASTE</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.caste} id="caste" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>SERIAL</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.serial} id="serial" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>ANNUAL INCOME</div>
                <input style={{flex:1}}  className="mdl-textfield__input" value={this.state.annual} id="annual" onChange={(e)=>this.onChange(e)} />
            </div>
            
       </form>
       :
       <div style={{backgroundColor:'#fff',width:'40%',border:'2px solid green',borderRadius:10,padding:5}} className="mdl-shadow--2dp">
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
                <u style={{margin:5,fontWeight:700}}>Date OF ISSUE</u>
                <u style={{margin:5,fontWeight:700}}>Date OF BLOCK PROOF:</u>
                <u style={{margin:5,fontWeight:700}}>SIGNING AUTHORITY:</u>
              </div>
              <div style={{display:'flex',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                  <img src="./qrcode.png" alt="qrcode"  style={{Width:70,height:70}} />
              </div>
            </div>
          </div>
       </div>
       }
       {
        this.state.cert ?
          <div>
         <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={()=>this.setState({cert:false})}>
          ISSUE CERTIFICATE 
          </button>
              <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={(e)=>this.autoFill(e)}>
          Auto Fill 
          </button>
              <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={(e)=>this.clear(e)}>
         Clear 
          </button>
          </div>
          :
          <div>
         <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={()=>this.setState({cert:false})}>
          Submit 
          </button>
              <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={(e)=>this.setState({cert:true})}>
          Edit 
          </button>
              <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
          onClick={(e)=>this.clear(e)}>
         Cancel
          </button>
          </div>
       }
      </div>
    )
  }
}

export default IssueCertificate
