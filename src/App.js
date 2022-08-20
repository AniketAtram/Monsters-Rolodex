import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: [
        {firstName:"Aniket", lastName:"Atram"},
        {firstName:"John", lastName:"Doe"},
        {firstName:"Jane", lastName:"Doe"},
        {firstName:"Bob", lastName:"Doyl"},
      ]
    }
  }
  render() { 
    return (
      <>
        {this.state.name.map((name)=>{
          return <h1>Hello {name.firstName} {name.lastName}!</h1>
        })}
      </>
    );
  }
}
 
export default App;
