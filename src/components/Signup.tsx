import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const signup = async () => {
        const res = await axios.post("http://localhost:3000/admin/singup", { username, password }
        );
        const data = res.data;
        console.log(data)

    }


    return (<>

        <div style={{
            display: 'flex',
            justifyContent: "center",
            marginTop: "150px",
            marginBottom: 10
        }}>
            <Typography variant='h6'>
                Welcome back to the Website
            </Typography>
        </div>

        <div style={{
            display: 'flex',
            justifyContent: "center",

        }}>
            <Card style={{ padding: 10, width: 400 }} variant="outlined">
                <TextField fullWidth={true} label="Username" variant="outlined" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <br />
                <br />
                <TextField fullWidth={true} label="Password" type='password' variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <br />
                <br />
                <Button variant='contained' size='large' onClick={signup}>SignUp</Button>
            </Card>
        </div>

    </>)
}

export default Signup;