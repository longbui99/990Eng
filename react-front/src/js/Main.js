import React from 'react';
import '../css/Main.css';
// import $ from 'jquery'
import Admin from './admin-p/Admin_Frame.js'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

export default class Main extends React.Component{
  render(){
    return(
    <main>
      <Router>
        <Route exact path='/'><App/></Route>
        <Route path='/admin'><Admin/></Route>
      </Router>
    </main>
  )};
}

class App extends React.Component{
  componentDidMount(){
  }
  render(){
    console.log("render")
    return (
      <div>
          <header>
            <button className="navbar-toggler d-none" id="havHEad" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
            </button>
            <button className="navbar-toggler d-none" id="authNavHEad" type="button" data-toggle="collapse" data-target="#navbarAuth" aria-controls="navbarAuth" aria-expanded="true" aria-label="Toggle navigation">
            </button>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
              <div className="container">
                <a className="navbar-brand" href="/#">990++</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="true" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav ml-auto d-flex flex-column flex-md-row justify-content-between" style={{width: '40vw'}}>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                      <label htmlFor="havHEad" className="nav-link mb-0" style={{cursor: 'pointer'}}> About us </label>
                    </li>
                    <li className="nav item">
                      <a className="nav-link" href="/#">Policy</a>
                    </li>
                    <li className="nav-item">
                      <a href="/#" className="nav-link">Sign up</a>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto">
                    <label htmlFor="authNavHEad" className="btn btn-outline-primary">
                      <span><i className="fas fa-sign-out-alt" /></span>
                      Try Free</label>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="bg-dark collapse pb-2 pt-2" id="navbarAuth">
              <div className="container">
                <div className="row">
                  <div className="offset-md-5" />
                  <div className="col-md-4">
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                      </div>
                      <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                      anyone
                      else.</small>
                    <div className="dropdown-divider" />
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping"><i className="fas fa-key" /></span>
                      </div>
                      <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <div className="align-middle pl-2" id="submit-oraction">
                      <button type="submit" className="btn btn-primary pl-3 pr-4">Authentication</button>
                      <br />
                      <span className="pl-1 pr-1 text-light">or use</span>
                      <br/>
                      <button type="submit" className="btn btn-danger">
                        {/* <span class="gg-icon border-right pr-3"><i class="fab fa-google"></i></span> */}
                        <span className="gg-text pl-2">Google Account</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="nav-main-acti">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
              <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 font-weight-normal">Graduating 989+1 </h1>
                <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing
                  efforts with this example based on Apple’s marketing pages.</p>
                <a className="btn btn-outline-secondary" href="/#">Join with us</a>
              </div>
              <div className="product-device shadow-sm d-none d-md-block" />
              <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
            </div>
          </div>
          <div className="bg-dark collapse" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">This website has been created for academic purposes only and the lectures
                    here are freely sourced. If you don't want to pay any fees, don't worry, you can create your
                    own lesson. Finally, we would like to have an open storage for your foreign language
                    learning.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li><a href="/#" className="text-white">Follow on Twitter</a></li>
                    <li><a href="/#" className="text-white">Like on Facebook</a></li>
                    <li><a href="/#" className="text-white">Email me</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
