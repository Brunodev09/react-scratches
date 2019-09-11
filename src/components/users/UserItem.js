import React from 'react';


const UserItem = (props) => {

    return (<div style={myStyle}>
        hey {props.user}
    </div>)
}

const myStyle = {
    color: 'red',
    marginLeft: '10px'
}

export default UserItem;