import React from 'react'
import "../../css/admin-p/admin_account.css"
import FeatherIcon from 'feather-icons-react'
import { Link, Route } from 'react-router-dom'
import AdmCreate from "./AdminAccCre"
import SORR from "./AdminAccSorr"

export default class AdmManAcc extends React.Component {

    render() {
        return (
            <div className="main-nav" style={{ marginTop: '20px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/management-account" >
                                            <FeatherIcon icon={"user"} />
                                            Create new
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/management-account/sorr" >
                                            <FeatherIcon icon={"search"} />
                      Search or Remove
                                        </Link>


                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/management-account/chart">
                                            <FeatherIcon icon={"bar-chart-2"} />
                      Reports
                    </Link>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                                <Route exact path="/admin/management-account"><AdmCreate /></Route>
                                <Route exact path="/admin/management-account/sorr"><SORR /></Route>
                        </main>
                    </div>
                </div>
            </div>
        )
    };
}