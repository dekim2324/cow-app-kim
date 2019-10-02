import React, {Component} from 'react';

class Cow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCow: this.props.cow.name,
            editMode: false,
            newCow: null
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

    };

    handleEdit(e) {
        this.setState({
            editMode: true
        })
    };

    handleKeyUp(e) {
    
        if(e.key === 'Enter') {
            this.setState({
                editMode: false
            })
            console.log(this.state.currentCow)
            this.props.handleEditCow(this.state.currentCow, this.state.newCow);

            fetch('/api/cows', {
                method: 'put',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cow: this.state.currentCow,
                    msg: this.state.newCow
                  }),
            }).then((res) => res)

        }

        this.setState({
            newCow: e.target.value
        })
    }

    render() {

        let theList = {};
        let theChange = {};
        
        if(this.state.editMode === false) {
            theChange.display = 'none'
        } else  {
            theList.display = 'none'
        }


        return(
            <div style={style}>
            <li>
                <span onClick={(e) => this.handleOneCowDelete(e)}>X </span> 
                <span style={theList}>{this.props.cow.name} {this.props.cow.description}</span> 
                <input 
                style={theChange} 
                type="text"
                onKeyUp={(e) => this.handleKeyUp(e)}
                />
                 <button 
                 onClick={(e) => {this.handleEdit(e)}} 
                 style={{marginLeft: "10px"}}
                 >edit</button>
                </li>
            </div>
        )
    }
    
}
const style = {
    listStyleType: 'none',
    textAlign: 'center',
    margin: '25px',
    fontSize: '18px',
    fontFamily: "Comic Sans MS"
}



export default Cow;