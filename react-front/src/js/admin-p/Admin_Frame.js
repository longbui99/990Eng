import React from 'react'
import "../../css/admin-p/admin_analyze.css"
import { BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'
import AdmAnalyze from "./Adm_Analyze"
import AdmManAcc from "./Adm_Acc"
// import Chart from "chart.js"
export default class Admin extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container">
                                <a className="navbar-brand" href="/#">990++</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" id="nav-link-adm-home" to="/admin">Home </Link>
                                            {/* <a </a> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="nav-link-adm-anal" to="/admin/analyze">Analyze</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="nav-link-adm-man" to="/admin/management-account">Account</Link>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-auto mr-2">
                                        <li className="nav-item">
                                            <p className="nav-link mb-0">v1.0.0</p>
                                        </li>
                                        <li className="nav-item text-light ">
                                            <label htmlFor="facebook-link" className="mb-0"><i className="fab fa-facebook-f" /></label>
                                            <a href="/#" id="facebook-link" >  </a>
                                        </li>
                                        <li className="nav-item text-light ">
                                            <label htmlFor="twitter-link" className="mb-0"><i className="fab fa-twitter" /></label>
                                            <a href="/#" id="twitter-link" >  </a>
                                        </li>
                                        <li className="nav-item text-light ">
                                            <label htmlFor="github-link" className="mb-0"><i className="fab fa-github" /></label>
                                            <a href="/#" id="github-link" >  </a>
                                        </li>
                                        <li className="nav-item text-light ">
                                            <label htmlFor="google-link" className="mb-0"><i className="fab fa-google" /></label>
                                            <a href="/#" id="google-link" >  </a>
                                        </li>
                                    </ul>
                                </div>
                                <form className="form-inline my-2 my-lg-0">
                                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Sign out</button>
                                </form>
                            </div>
                        </nav>
                    </header>
                    <div className="main-nav">
                        <Route path="/admin/analyze"><AdmAnalyze/></Route>
                        <Route path="/admin/management-account"><AdmManAcc/></Route>
                    </div>
                </div>
            </Router>
        )
    };
}