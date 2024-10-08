import React, { FC } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

import { Home, Login, SignUp, Protected, PrivateRoute } from './views';
import { Admin } from './admin';
import { logout } from './utils/auth';

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
});

export const AllRoutes: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />

      {/* <div className={classes.app}> */}
        {/* <header className={classes.header}> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route
            path="/logout"
            render={() => {
              logout();
              navigate('/');
              return null;
            }}
          />
          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <Protected />
              </PrivateRoute>
            }
          />
          <Route exact path="/" element={<Home/>} />
        {/* </header>
      </div> */}
    </Routes>
  );
};
