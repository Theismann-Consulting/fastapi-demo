// import React, { FC } from 'react';
// import { Route, Navigate } from 'react-router-dom';

// import { isAuthenticated } from '../utils/auth';

// type PrivateRouteType = {
//   component: React.ComponentType<any>;
//   path?: string | string[];
// };

// export const PrivateRoute: FC<PrivateRouteType> = ({
//   component,
//   ...rest
// }: any) => (
//   <Route
//     {...rest}
//     render={(props: any) =>
//       isAuthenticated() === true ? (
//         React.createElement(component, props)
//       ) : (
//         <Navigate to="/login" />
//       )
//     }
//   />
// );

import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

function useAuth() {
  // This is a placeholder for your authentication logic.
  // You should replace it with your actual authentication logic.
  const user = { loggedIn: true }; // Example user object
  return user && user.loggedIn;
}

export const PrivateRoute: FC = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}
