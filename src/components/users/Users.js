import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

    state = {
        users: [
            {id: 123}, 
            {id: 124}, 
            {id: 125}
        ]
    };

    render() {
        return (
        <div>  
            {this.props.users.map(user => (<UserItem key={user.id} user={user.login} />))}
        </div>
        )
    }
}

export default Users;