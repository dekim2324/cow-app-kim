import React, {Component} from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            cow: '',
            description: ''
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log({cow: this.state.cow, description: this.state.description})
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                
                <form>
                    <input
                    name='cow'
                    value={this.state.cow}
                    onChange={(e) => this.handleChange(e)}
                    type='text' placeholder='cow name'/>
                    <input 
                    name='description'
                    value={this.state.description}
                    onChange={e => this.handleChange(e)}
                    type='text' placeholder='description'/>
                    <input onClick={(e) => this.handleSubmit(e)} type="submit" />     
                </form>
               
            </div>
        )
    }

}



export default Input;