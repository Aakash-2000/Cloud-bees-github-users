import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserCard from "./UserCard";
import '../styles/Users.css'


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isError, setError] = useState(false);
    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then((response) => {
                const { data = [] } = response;
                setUsers(data);
                setError(false);
            })
            .catch((error) => {
                setError(true);
            })
    }, [])
    return (
        <div className="userListContainer">
            { 
                users.map(user => <UserCard key={user.id} user={user}/>)
            }
        </div>
    )
}

export default UsersList;