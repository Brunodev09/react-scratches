import React from 'react';


const UserItem = (props) => {

    return (<div style={myStyle}>
        User: {props.user}
    </div>)
}

const myStyle = {
    color: 'black',
    marginLeft: '10px',
    textAlign: 'center'
}

export default UserItem;