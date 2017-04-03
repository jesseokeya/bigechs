import React from 'react';
import './css/styles.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Big Ech's"
        };
    }
    showContactInfo() {
        $('#contactModal').modal({show: true});
    }
    render() {
        return (
            <nav className="navbar navbar-toggleable-md bg-inverse navbar-inverse">
                <div className="container">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand">
                        <h4 className="logoname">
                            {this.state.title}
                        </h4>
                    </a>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active">
                                <button type="button" className="btn btn-outline-danger btn-md" onClick={this.showContactInfo}>
                                    Contact
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Our Contact Info
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-success">
                                            Phone1:
                                            <span className="contact-info">
                                                <a href="tel:6138909733">
                                                    (613) 890-9733
                                                </a>
                                            </span>
                                        </li>
                                        <li className="list-group-item list-group-item-info">
                                            Phone2:
                                            <span className="contact-info">
                                                <a href="tel:6138697075">
                                                    (613) 869-7075
                                                </a>
                                            </span>
                                        </li>
                                        <li className="list-group-item list-group-item-danger">
                                            Email:
                                            <span className="contact-info">
                                                <a href="mailto: bigechskitchen@gmail.com">
                                                    bigechskitchen@gmail.com
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;
