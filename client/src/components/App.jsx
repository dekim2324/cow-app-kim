import React, {Component} from 'react';
import Top from './top.jsx';
import Input from './Input.jsx';
import CowList from './CowList.jsx';

class App extends Component {
    constructor() {
        super();

        this.state = {
            cowList: []
        }
    }

    componentDidMount() {
        fetch('/api/cows')
            .then(cow => cow.json())
            .then(cow => this.setState({cowList: cow}, () => console.log(cow)))
    };

    handleMore(newCow) {
        this.setState({
            cowList: [...this.state.cowList, newCow]
        })
    };

    handleDelete() {
        this.setState({
            cowList: []
        })
    };

    handleOneCow(cowname) {
        this.setState({
            cowList: this.state.cowList.filter(cow => {
                return cow.name !== cowname
            })
        })
    };

    handleEditCow(cowname, newMsg) {

        let newList = this.state.cowList.map(cow => {
            if(cow.name === cowname) {
                return {id: cow.id, name: cow.name, description: newMsg}
            } else {
                return cow
            }
        });
        console.log(newList)
        this.setState({
            cowList: newList
        });
    }

    render() {
        return(
            <div>
                <Top />
                <Input 
                handleMore={this.handleMore.bind(this)}
                handleDelete={this.handleDelete.bind(this)}
                />
                <CowList 
                handleOneCow={this.handleOneCow.bind(this)} 
                handleEditCow={this.handleEditCow.bind(this)}
                list={this.state.cowList} 
                
                />
            </div>
        )
    }
}
export default App;