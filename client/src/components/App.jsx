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


    render() {
        return(
            <div>
                {/* {this.state.cowList.map(cow => 
                    <li key={cow.id}>{cow.description}</li>
                    )} */}
                <Top />
                <Input />
                <CowList list={this.state.cowList} />
            </div>
        )
    }
}
export default App;