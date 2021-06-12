import "./App.css";
import Button from '@material-ui/core/Button';
import { useAuth } from 'reactfire';
import React, { Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function Home() {
    const auth = useAuth();
    return (
        <Typography component="div">
            <Box textAlign="center" m={1}>
            <h1>{auth.currentUser.email}</h1>

            <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick = {async () => await auth.signOut()}>
            Logout
          </Button>
      </Box>
      </Typography>
        
    )
}

export default Home