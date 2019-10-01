import React, {Component} from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cow: '',
            description: ''
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        let newCow = {name: this.state.cow, description: this.state.description}

        this.props.handleMore(newCow)


        fetch('/api/cows', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.cow,
                description: this.state.description,
              }),
        }).then((cow) => cow)

        
        this.setState({
            cow: '',
            description: ''
        })
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleDelete(e) {
        this.props.handleDelete();

        fetch('/api/cows', {
            method: 'delete'
        }).then((res) => res)
    }

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                
                <form>
                    <input
                    className="inputs1"
                    name='cow'
                    value={this.state.cow}
                    onChange={(e) => this.handleChange(e)}
                    type='text' placeholder='cow name'/>
                    <input 
                    className="inputs2"
                    name='description'
                    value={this.state.description}
                    onChange={e => this.handleChange(e)}
                    type='text' placeholder='description'/>
                    <input onClick={(e) => this.handleSubmit(e)} type="submit" /> 
                    <button onClick={(e) => this.handleDelete(e)} type="button">Delete All</button>
                </form>
               
            </div>
        )
    }

}



export default Input;