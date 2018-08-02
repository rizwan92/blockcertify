import React, {Component} from 'react';
import './App.scss';
import  HomePage  from './HomePage';
import { Route } from 'react-router-dom'
import  AdminHome  from './AdminHome';
import { withRouter } from 'react-router-dom'
import IssueCertificate  from './IssueCertificate';
import  VerifiRecords  from './VerifyRecords';

class App extends Component {


  componentDidMount = () => {
    // window.componentHandler.upgradeDom();
  };

  render () {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header
            className="mdl-layout__header"
            style={{height: 100, padding: 20}}
          >
            <div className="mdl-layout__header-row">
            <i className="material-icons" style={{fontSize:40,marginRight:30,cursor:'pointer'}} 
            onClick={()=>this.props.history.goBack()}>keyboard_arrow_left</i>
              <span className="mdl-layout-title">
                <img
                  src="./cglogo.jpg"
                  style={{width: 90, height: 90, borderRadius: '50%'}}
                  alt="CG"
                />
              </span>
              <div className="mdl-layout-spacer" />
         

              <h4 style={{font: 'sens-serif'}}>
                DEPARTMENT OF TRIBAL AND SCHEDULED CASTES
              </h4>
              <div className="mdl-layout-spacer" />
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="/">Home</a>
                <a className="mdl-navigation__link" href="/admin">About Us</a>
                <a className="mdl-navigation__link" href="">Support</a>
              </nav>
            </div>
          </header>
          <main
            className="mdl-layout__content "
            style={{backgroundColor: '#34495e'}}
          >
            <center className="page-content">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/admin" component={AdminHome} />
              <Route exact path="/issue" component={IssueCertificate} />
              <Route exact path="/verify" component={VerifiRecords} />
            </center>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
