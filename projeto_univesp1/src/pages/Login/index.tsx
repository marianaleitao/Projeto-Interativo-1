import Departments from "../Departments";
import Employees from "../Employees";
import Processes from "../Processes";



function Login () {
  return (
    <div >
      <header >
        
        <h1>
          Seja Bem Vindo! 
        </h1>
        <h1>  
          Projeto Integrador - Desenvolvimento Web 
        </h1>
                   
      </header>

      <body>
        <p> Clique na página em que gostaria de ser direcionado</p>
        <button onClick={Departments}> Departamentos </button>
        <button onClick={Processes}> Processos </button>
        <button onClick={Employees}> Funcionários </button>
        
      </body>

    </div>
    
  );
}


export default Login;