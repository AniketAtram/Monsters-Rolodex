import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchString: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(
                () => {
                    return { monsters: users }
                }
                ));
    }

    onInputChangeHandler = (e)=>{
        let searchString = e.target.value.toLocaleLowerCase();
        this.setState({searchString})
    };

    render() {
        const { monsters, searchString } = this.state;
        const { onInputChangeHandler } = this;

        const filteredData = monsters.filter((monster)=>{
            return monster.name.toLocaleLowerCase().includes(searchString);
        });
        return (
            <div>
                <input
                className='input-bar'
                type="search"
                placeholder='Enter Name'
                onChange={onInputChangeHandler}
                />
                {
                    filteredData.map((monster) => (
                    <div key={monster.id}>
                        <h1>
                            {monster.name}
                        </h1>
                    </div> 
                    ))
                }
            </div>
        )
    }
}

export default App;
