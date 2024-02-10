
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../styles/Users.css'


const UserDetails = () => {
    const [user, setUser] = useState({});
    const [isError, setError] = useState(false);
    const { userName } = useParams();
    useEffect(() => {
        axios.get(`https://api.github.com/users/${userName}`)
            .then((response) => {
                const { data = [] } = response;
                setUser(data);
                console.log(data);
                setError(false);
            })
            .catch((error) => {
                setError(true);
            })
    }, [])
    return (
        <div className="userDetailsContainer">
            <Card variant="outlined" className="userDetailsCard">
                <Avatar
                    alt={user.name}
                    src={user.avatar_url}
                    style={{
                        width: 500,
                        height: 500,
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {user.location}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        {user.bio}
                    </Typography>
                    {user.email && (<Typography>
                        <MailOutlineIcon />{user.email}
                    </Typography>)}
                    <Typography>
                        No of repos : {user.public_repos}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component="a" href={user.html_url}>Go to profile</Button>
                </CardActions>

            </Card>

        </div>

    )
}

export default UserDetails;