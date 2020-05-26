import React from 'react'
import "../../css/admin-p/admin_account.css"
import FeatherIcon from 'feather-icons-react'
// import { Link } from 'react-router-dom'



export default class AdmCreate extends React.Component {

    render() {
        return (
            <div className="create-new-ac">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/#">Home</a></li>
                        <li className="breadcrumb-item"><a href="/#">Account</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Create new</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-md-8 order-md-1">
                        <div className="row">
                            <h4 className="col-md-9 mb-3">Account information</h4>
                            <div className="col">
                                <div className="input-group mb-1">
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option defaultValue>Position ...</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Client</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                          </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                          </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" id="email" placeholder="you@example.com" required />
                                    <div className="invalid-feedback" style={{ width: '100%' }}>
                                        Your email required.
                          </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">Username <span className="text-muted">(Optional)</span></label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FeatherIcon icon="user"/></span>
                                    </div>
                                    <input type="username" className="form-control" id="username" placeholder="Username" />
                                    <div className="invalid-feedback">
                                        This username has already existed.
                          </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FeatherIcon icon="shield" /></span>
                                    </div>
                                    <input type="password" className="form-control" id="password" placeholder="Passsword here" required />
                                    <div className="invalid-feedback">
                                        Please enter your password.
                          </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Check password</label>
                                <input type="password" className="form-control" id="c-password" placeholder="Check here" required />
                                <div className="invalid-feedback">
                                    Your password does not same!
                        </div>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block" type="submit">Create new</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    };
}