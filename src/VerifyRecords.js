import React, { Component } from 'react'

export class VerifiRecords extends Component {
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
        cert:true
      }
 
  onChange =(e)=>this.setState({[e.target.id]:e.target.value})

  render() {
    return (
      <div>
         <h3 style={{color:'#fff'}}>VERIFY CERTIFICATE</h3> 
         <h5 style={{color:'#fff'}}>PLEASE PERFORM ANY ONE OPERATION TO CHECK CERTIFICATE</h5> 
         {
             this.state.cert ?
         <form style={{backgroundColor:'#fff',width:'40%',borderRadius:10,padding:10}} className="mdl-shadow--2dp">
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>ENTER HASH NUMBER</div>
                <input style={{flex:1}}  placeholder="256 bit"  className="mdl-textfield__input"  id="doi" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>UPLOAD QR IMAGE</div>
                <input type="file" style={{flex:1}}  placeholder="upload"  className="mdl-textfield__input"  id="doi" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>UPLOAD QR IMAGE</div>
                <img src="./qrcode.png" alt="qrcode"  style={{Width:70,height:70}} />
            </div>
        </form>
        :
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
        }
        {
            this.state.cert ?
            <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
            onClick={()=>this.setState({cert:false})}>
            SUBMIT
            </button>
            :
            <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
            onClick={()=>this.setState({cert:true})}>
            DONE
            </button>
        }
      </div>
    )
  }
}

export default VerifiRecords
