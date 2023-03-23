

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsEmployees from './components/pages/ContactsEmployees';
import DataDepartments from './components/pages/DataDepartments';
import DataProcesses from './components/pages/DataProcesses';
import Departments from './components/pages/Departments';
import Employees from './components/pages/Employees';
import Error from './components/pages/Error';
import Header from './components/Header';
import Processes from './components/pages/Processes';

export default function Router (){
  return (
    <BrowserRouter>
      <Routes>
        < Route path= '/'  element = { < Header />} />
        < Route path= '/departments'  element = { < Departments />} />
        < Route path= '/datadepartments'  element = { < DataDepartments />} />
        < Route path= '/employees'  element = { < Employees />} />
        < Route path= '/contactsemployees'  element = { < ContactsEmployees />} />
        < Route path= '/processes'  element = { < Processes />} />
        < Route path= '/dataprocesses'  element = { < DataProcesses />} />
        < Route path= '*'  element = { < Error/>} />
      </Routes>
    </BrowserRouter>
  );
}
