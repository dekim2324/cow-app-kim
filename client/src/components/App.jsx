import React, {Component} from 'react';

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
            .then(cow => console.log('this is result', cow))
    }

    render() {
        return(
            <div>
                testtt
            </div>
        )
    }
}
export default App;