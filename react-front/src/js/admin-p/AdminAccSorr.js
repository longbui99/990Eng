import React from 'react'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import "../../css/admin-p/AdmAccSorr.css"
export default class SORR extends React.Component {

    componentDidMount() {
        console.log("OK")
        $('#element').toast({autohide:false})
        $('#element').toast('show')
        $('#tbl-tbody-sea-id').on('click','tr',function(e){
            $('#element').toast('show')
        })
    }

    render() {
        return (
            <div className="adm-create-acc">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/#">Home</a></li>
                        <li className="breadcrumb-item"><a href="/#">Account</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Search or remove</li>
                    </ol>
                </nav>
                <div className="search-engine">
                    <div className="row">
                        <div className="col-md-4">
                            <div id="element" style={{ maxWidth: '600px', width: '400px' }} className="toast position-absolute" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <strong className="mr-1">About : </strong><strong className="mr-auto" id="info-user-title"> Bùi Phi
                    Long</strong>
                                    {/* <small class="text-muted">just now</small> */}
                                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="toast-body">
                                    <div className="d-flex align-items-center ml-2 mr-5  mb-1">
                                        <div className="mr-auto"><strong>ID: </strong> <span id="toast-id-user">10051999</span></div>
                                    </div>
                                    <div className=" ml-2 mb-2"><strong>Email: </strong><span id="toast-email-user">long.builong.bui@hcmut.edu.vn</span></div>
                                    <div className=" ml-2 mb-2"><strong>Contact: </strong><span id="toast-contact-user">&gt;0969359810</span>
                                    </div>
                                    <div className=" ml-2 mb-2"><strong>Balance: </strong><span id="toast-blanc-user">1999 </span><span className="text-monospace">$</span>
                                    </div>
                                    <div className="d-flex ml-2 mb-2 mr-5">
                                        <div className="mr-auto"><strong>Time:</strong> <span id="toast-days-user">3650
                      </span> days</div>
                                        <div> <strong>From:</strong> <span id="toast-dayin-user">10/05/1999</span>
                                        </div>
                                    </div>
                                    <div className=" ml-2 mb-2"><strong>State:</strong> <span className="text-danger" id="toast-state-user">Renew password</span>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="ml-2 mr-2 d-flex">
                                        <div className="btn-renew mr-auto">
                                            <button type="button" className="btn btn-outline-primary" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">Renew
                        password</button>
                                        </div>
                                        <div className="btn-remove">
                                            <button type="button" className="btn btn-outline-danger">Delete</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="collapse" id="navbarToggleExternalContent">
                                            <hr className="my-4" />
                                            <div className="bg-white pl-4">
                                                <div className="mb-3">
                                                    <input type="password" className="form-control" id="new-password" placeholder="New password" required />
                                                    <div className="invalid-feedback">
                                                        Your password has at least 8 character!
                          </div>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="password" className="form-control" id="c-password" placeholder="Check password" required />
                                                    <div className="invalid-feedback">
                                                        Your password does not same!
                          </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary">Change</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jumbotron jumbotron-fluid bg-white">
                                <div className="container">
                                    <h5 className="display-6">About</h5>
                                    <p className="lead">Information about account.</p>
                                    <hr className="my-4" />
                                    <div className="info-group">
                                        <p>Now, website have 1999 account join with us and ....</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8" style={{ borderLeft: 'solid 1px black' }}>
                            <h5>Search engine</h5>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="ID" />
                                <input type="text" className="form-control" placeholder="Username" />
                                <input type="text" className="form-control" placeholder="Email" />
                                <input type="text" className="form-control" placeholder="Contact" />
                                <div className="input-group-append">
                                    <span className="input-group-text">Search</span>
                                </div>
                            </div>
                            <div className="tbl-seach mt-2 table-responsive" style={{ maxHeight: '60vh' }}>
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Contact</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbl-tbody-seach" id="tbl-tbody-sea-id">
                                        <tr >
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}