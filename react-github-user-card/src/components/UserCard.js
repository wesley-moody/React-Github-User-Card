import React from 'react';

const UserCard = (props) => {

    console.log(props);
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.login}</p>
            <p>{props.email}</p>
            <img src = {props.avatar} alt = 'user photo' />


        </div>
    );
}

export default UserCard; 