import React, { Component } from 'react'
import ReactLoading from 'react-loading';

export class VerifiRecords extends Component {
    state= {
        hash:'',
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
        loading:false,
      }
      showSnackBar(msg){
        var snackbarContainer = document.querySelector('#demo-toast-example');
        var data = {message: msg};
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
      }
      handleSubmit=(e)=>{
          e.preventDefault()
          const hash = this.state.hash.trim()
          if (this.state.hash === '') {this.showSnackBar('enter Hash'); return }
          const mydata = JSON.parse(localStorage.getItem("mydata"));
          let data = mydata.find((data)=> data.hash === hash)
          let originaldata = JSON.parse(JSON.stringify(data.data));
          originaldata['cert'] = false
          this.setState({loading:true},()=>{
              setTimeout(()=>{
                originaldata['loading'] = false
                  this.setState(originaldata)
              },2000)
          })
        }
 
  onChange =(e)=>this.setState({[e.target.id]:e.target.value})

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
         <h3 style={{color:'#000'}}>VERIFY CERTIFICATE</h3> 
         <h5 style={{color:'#000'}}>PLEASE PERFORM ANY ONE OPERATION TO CHECK CERTIFICATE</h5> 
         {
             this.state.cert ?
         <form style={{backgroundColor:'#fff',width:'40%',borderRadius:10,padding:10}} className="mdl-shadow--2dp">
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>ENTER HASH NUMBER</div>
                <input style={{flex:1}}  placeholder="256 bit"  className="mdl-textfield__input" value={this.state.hash}  id="hash" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>UPLOAD QR IMAGE</div>
                <input type="file" style={{flex:1}}  placeholder="upload"  className="mdl-textfield__input"  id="doi" onChange={(e)=>this.onChange(e)} />
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
                <div style={{flex:1,textAlign:'left'}}>Scan QR code </div>
                <img src="./qrcode.png" alt="qrcode"  style={{Width:70,height:70}} />
            </div>
            <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
            onClick={(e)=>this.handleSubmit(e)}>
            SUBMIT
            </button>
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
        <button className="mdl-button mdl-js-button" style={{backgroundColor:'RGB(0,153,153)',color:'#fff',margin:10}}
            onClick={()=>this.setState({cert:true})}>
            DONE
            </button>
   </form>       
           
        }
      </div>
    )
  }
}

export default VerifiRecords
