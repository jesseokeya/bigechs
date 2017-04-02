import React from 'react';
import './css/styles.css';

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Big Ech's"
        }
    }
    handleClick() {
        $('#myModal').modal({show: true});
        $('#sucess').hide();
    }
    handleSubmit() {
        let orderInfo = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            order: document.getElementById('order').value
        }
        console.log(orderInfo);
        $('#myModal').modal('hide');
        setTimeout(() => {
            alert(' Order Successfully Placed!! 😁 ');
        }, 1000);

    }

    render() {
        return (
            <div className="intro jumbotron jumbotron-fluid bg-inverse text-black text-center" >
                <div className="container">
                    <h3 className="display-5">
                        Welcome to {this.state.title}
                    </h3>
                    <p className="lead">
                        <b>
                            Nigerian Food Fast Delivery Within Carleton
                        </b>
                    </p>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.handleClick}>
                        Order Now
                    </button>

                    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Place Order
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Name" id="name"/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <input type="phone" className="form-control" placeholder="PhoneNumber" id="phone"/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" id="email"/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <textarea className="form-control" id="order" rows="3" placeholder="Enter Order Description"></textarea>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                                        Submit Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Intro;
