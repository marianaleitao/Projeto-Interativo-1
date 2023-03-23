import { Link } from "react-router-dom";


function Processes () {
  return (
    <div >
      <header >
        
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