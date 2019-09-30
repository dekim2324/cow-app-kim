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
            .then(cow => console.log(cow))
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