

import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import ContactsEmployees from './components/pages/ContactsEmployees';
import DataDepartments from './components/pages/DataDepartments';
import DataProcesses from './components/pages/DataProcesses';
import Departments from './components/pages/Departments';
import Employees from './components/pages/Employees';
import Error from './components/pages/Error';
import Header from './components/Header';
import Processes from './components/pages/Processes';
=======
import ContactsEmployees from './pages/ContactsEmployees';
import DataDepartments from './pages/DataDepartments';
import DataProcesses from './pages/DataProcesses';
import Departments from './pages/Departments';
import Employees from './pages/Employees';
import Error from './pages/Error';
import Login from './pages/Login';
import Processes from './pages/Processes';

>>>>>>> dabb14ad8fa7076b585bb7bad824ea55f40beeab

export default function Router (){
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        < Route path= '/'  element = { < Header />} />
=======
        < Route path= '/'  element = { < Login />} />
>>>>>>> dabb14ad8fa7076b585bb7bad824ea55f40beeab
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
