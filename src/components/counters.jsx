import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
   
    render() {
        console.log(this.props)

        return (<div>
            <buttn onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</buttn>;
            {this.props.counters.map(counter =><Counter key={counter.id} onIncrement={this.props.onIncrement }
            onDelete={this.props.onDelete} counter={counter}/>)}

        </div>);
    }
}
 
export default Counters;