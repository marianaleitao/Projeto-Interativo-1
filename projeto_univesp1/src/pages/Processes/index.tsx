import { Link } from "react-router-dom";

import Footer from "../../Footer";
import Header from "../../Header";
import DataProcesses from "../DataProcesses";


function Processes () {
  return (
    <div >
      <header >

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

export default Processes;