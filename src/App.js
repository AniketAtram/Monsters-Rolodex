import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: []
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(
                () => {
                    return { monsters: users }
                },
                () => {
                    console.log(this.state);
                }));
    }


    render() {
        return (
            <>
                <h1>Hello World</h1>
                {
                    this.state.monsters.map((monster) =>{ 
                        return <h1>{monster.name}</h1> 
                        }
                    )
                }
            </>
        );
    }
}

export default App;
