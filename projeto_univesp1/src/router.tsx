
import { NOTFOUND } from 'dns';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Departments from './pages/Departments';
import Employees from './pages/Employees';




import Login from './pages/Login';
import Processes from './pages/Processes';

function Router () {
  return (
      <BrowserRouter>
        <Routes>
          < Route path= '/'  element = { < Login />} />
          < Route path= '/departments'  element = { < Departments />} />
          < Route path= '/employees'  element = { < Employees />} />
          < Route path= '/processes'  element = { < Processes />} />
               

        </Routes>
      </BrowserRouter>
      

  );
}

export default Router;
