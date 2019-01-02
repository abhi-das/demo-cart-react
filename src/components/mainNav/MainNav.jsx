import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class MainNav extends Component {

    render() {
        return (
            <div>            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">SHOPPY</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to={process.env.PUBLIC_URL + "/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to={process.env.PUBLIC_URL + "/men"}>Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to={process.env.PUBLIC_URL + "/women"}>Women</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to={process.env.PUBLIC_URL + "/kids"}>Kids</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="pull-right">
                    <span className="badge badge-sm badge-primary">{ this.props.totalItem }</span>
                    <span><i className="fa fa-shopping-cart fa-2x"></i></span>
                    <button className="btn btn-sm btn-danger m-2" onClick={ this.props.onReset }><i className="fa fa-trash"></i></button>
                </div>
            </div>
        )
    }
}

export default MainNav;