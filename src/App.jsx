import { useState, useEffect } from "react"
import FormComponent from "./components/FormComponent"
import HeaderComponent from "./components/HeaderComponent"
import PatientListComponent from "./components/PatientListComponent"


const App = () => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  /*
  Se ejecuta primero este efect
  detecta si ha algo en local storAGE
  */
  useEffect( () => {
    //obtenemos localstorage
    const getLocalStorage = () => { 
      //detecta si tiene algo local storage
      const pacienteLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    
      setPacientes(pacienteLocalStorage);

    }
    getLocalStorage();

  },[]);

  useEffect( () => {

    localStorage.setItem('pacientes',JSON.stringify( pacientes ));
    
  },[pacientes]);

  //eliminando pacientes
  const elminarPacienteId = (id) => {

    //console.log('Eliminar paciente Id', id);
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );

    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">

      <HeaderComponent/>

      <div className="mt-12 md:flex">
        <FormComponent
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <PatientListComponent
          pacientes={pacientes}
          setPaciente={setPaciente}
          elminarPacienteId={elminarPacienteId}
        />
      </div>
      

    </div>
  )
}


export default App;
