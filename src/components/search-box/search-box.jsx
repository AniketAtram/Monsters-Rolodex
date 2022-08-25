import React, { Component } from 'react';
import './search-box-styles.css';
class SearchBox extends Component { 
    render() { 
        let {onChangeHandler, ClassName, PlaceholderText} = this.props;
        return (
            <>
                <input
                className= {ClassName}
                type="search"
                placeholder= {PlaceholderText}
                onChange={onChangeHandler}
                />
            </>
        );
    }
}
 
export default SearchBox;