import React, { Component } from 'react';

class Search extends Component {

    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }

    onChange = (e) => {
        this.setState({text: e.target.value});
    }

    render() {
        return (
        <div>  
            <form onSubmit={this.onSubmit} className="form">
                <input onChange={this.onChange} type="text" name="text" placeholder="Search here..." value={this.state.text}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>                
            </form>
        </div>
        )
    }
}

export default Search;