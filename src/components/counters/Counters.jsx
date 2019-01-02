import React, { Component } from 'react';

import Counter from '../counter/Counter';

class Counters extends Component {

    render() {
        return (
            <div className="call-to-action container">
                <div className="row">
                    {
                        this.props.counters.map( eleProp => 
                            <Counter key={ eleProp.id } countAttr={ eleProp } 
                            onDelete={ this.props.onDel } 
                            onIncrement={ this.props.onInc } 
                            onDecrement={ this.props.onDec } />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Counters;