import React, {Component} from 'react';
// var models = require('../../../server/models/index');

class Cow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCow: this.props.cow.name
        }
    };

    handleOneCowDelete(e) {

        console.log('delete this cow: ', this.state.currentCow)
        this.props.handleOneCow(this.state.currentCow)

        fetch('/api/cows', {
            method: 'delete',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cow: this.state.currentCow
              }),
        }).then((res) => res)

    }

    render() {
        return(
            <div style={style}>
            <li>
                <span onClick={(e) => this.handleOneCowDelete(e)}>X </span> 
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