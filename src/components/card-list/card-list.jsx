import React, { Component } from 'react';
import './card-style.css';
import './card-list-style.css';
class CardList extends Component {
   
    render() { 
        let { filteredData } = this.props;
        return (
            <div className='card-list'>
                {
                    filteredData.map((monster) => (
                    <div className='card-container' key={monster.id}>
                        <img src={`https://robohash.org/${monster.id}?set=set2`} alt={monster.name} />
                        <h2>{monster.name}</h2>
                        <p>{monster.email}</p>
                    </div> 
                    ))
                }
            </div>
        );
    }
}
 
export default CardList;