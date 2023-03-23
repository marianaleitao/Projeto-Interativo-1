import { Link } from "react-router-dom";


export default function Employees () {
  return (
    <div >
      <header >
        
        <p>
          funcionários

          
        </p>   

        
        <nav>
           
          <Link to ="/contactsemployees"> Cadastrar Funcionários Novos </Link>, 
                    
        </nav>
      </header>

      <body>
      <nav>
           
          <Link to ="/processes"> Processes </Link>, 
          <Link to ="/departments"> Departamentos </Link>,
          <Link to ="/"> Login </Link>
          
        </nav>
      </body>

    </div>
  );
}

