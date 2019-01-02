import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {
    
    render() {
        // console.log(this.props);
        return (
            <div className="col-sm-6 col-md-3 product-container">
                <div className="prod-img m-3">
                    <img src={this.props.countAttr.img} alt="product"/>
                </div>
                <span className={ this.getBadgeStyles() }>{ this.formatCount() }</span>
                <button className="btn btn-light btn-sm"
                    onClick={ () => this.props.onIncrement(this.props.countAttr) }>Add</button>
                <button className="btn btn-light btn-sm m-2"
                    onClick={ () => this.props.onDecrement(this.props.countAttr) }>Reduce</button>
                <button className="btn btn-danger btn-sm m-2"
                    onClick={ () => this.props.onDelete(this.props.countAttr) }><i className="fa fa-trash"></i></button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.props.countAttr;
        return ( count === 0 ) ? 'Zero' : count;
    }

    getBadgeStyles() {
        const { count } = this.props.countAttr;
        let styles = "badge m-2 badge-";
        return ( count === 0 ) ? styles += "warning" : styles +="primary";
    }
}

export default Counter;