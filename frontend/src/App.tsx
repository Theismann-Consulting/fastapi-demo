import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes as Routes } from './Routes';

const App: FC = () => {
    return (
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      );
}

export default App;
