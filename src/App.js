import React, { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
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
            .then((users) => this.setState({monsters:users}))
            .catch(error => console.error(error.message));
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
                <SearchBox ClassName="search-box" onChangeHandler={onInputChangeHandler} PlaceholderText="Search Monster"/>
                <CardList filteredData={filteredData} />
            </div>
        )
    }
}

export default App;
