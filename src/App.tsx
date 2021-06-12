import React, { Suspense , useState } from 'react';
import './App.css';
import Login from "./Login";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import {
  AuthCheck,
  useAuth,
} from 'reactfire';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(),
      },
    },
  }),
);

function App() {
  const auth = useAuth();
  const classes = useStyles();
  return (
    <div>
      <Router>
          <Suspense fallback={'loading burrito status...'}>
            <AuthCheck fallback={<Login />} auth={auth}>
              <Route exact path="/" component={Home} />
            </AuthCheck>
    </Suspense>
    </Router>
    </div>
    
  )
}

export default App;
