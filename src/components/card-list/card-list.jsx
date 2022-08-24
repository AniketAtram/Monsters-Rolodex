import React, { Component } from 'react';
class CardList extends Component {
   
    render() { 
        let { filteredData } = this.props;
        return (
            <>
                {
                    filteredData.map((monster) => (
                    <div key={monster.id}>
                        <h1>
                            {monster.name}
                        </h1>
                    </div> 
                    ))
                }
            </>
        );
    }
}
 
export default CardList;