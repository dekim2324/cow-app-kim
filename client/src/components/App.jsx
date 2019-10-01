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

    render() {
        return(
            <div>
                <Top />
                <Input 
                handleMore={this.handleMore.bind(this)}
                handleDelete={this.handleDelete.bind(this)}
                />
                <CowList list={this.state.cowList} />
            </div>
        )
    }
}
export default App;