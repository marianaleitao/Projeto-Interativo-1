import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataProcesses from "../DataProcesses";

export default function Processes () {
  return (
    <div >
      <header >
        < Header />
        <DataProcesses />
        <Footer />
        
        <p>
          Processos
        </p>   
        
      </header>

      

      <body>
      <nav>
           
          <Link to ="/"> Login </Link>, 
          <Link to ="/departments"> Departamentos </Link>,
          <Link to ="/employees"> Funcionários </Link>
          
        </nav>
      </body>
    </div>
  );
}


