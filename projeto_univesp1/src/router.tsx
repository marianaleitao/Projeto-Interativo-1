
import {BrowserRouter, Route } from 'react-router';

import Login from './pages/Login';

function Routes () {
  return (
    <BrowserRouter>
      <Route path = '/' exact component = { < Login />} />
      
      </BrowserRouter>

  );
}

export default Routes;
