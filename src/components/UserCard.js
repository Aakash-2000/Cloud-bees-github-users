import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import '../styles/Users.css'


const UserCard = ({ user }) => {
    const { login: userName, avatar_url: avatarUrl } = user;
    return (
        <>
            <Box className="userCard">
                <Card variant="outlined">
                    <CardContent>
                        <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems:'center'}}>
                            <Avatar alt={userName} src={avatarUrl} />
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                {userName}
                            </Typography>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/user/${userName}`} size="small">View user</Button>
                    </CardActions>
                </Card>
            </Box>

        </>
    )
}

export default UserCard;