import React, {Component} from 'react';
// var models = require('../../../server/models/index');

class Cow extends Component {
    constructor(props) {
        super();
    };

    render() {
        return(
            <div style={style}>
            <li>
                <span>X </span> 
                 {this.props.cow.name} {this.props.cow.description} 
                </li>
            </div>
        )
    }
    
}
// onClick={handleDelete}
// Cow.propTypes = {
//     cow: React.PropTypes.object.isRequired
// }

const style = {
    listStyleType: 'none',
    textAlign: 'center',
    margin: '25px',
    fontSize: '18px',
    fontFamily: "Comic Sans MS"
}

export default Cow;