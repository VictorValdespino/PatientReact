
import PatientComponent from "./PatientComponent"



const PatientListComponent = ({pacientes, setPaciente,elminarPacienteId}) => {
 

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center"> Listado de pacientes </h2>
          <p className=" text-xl mt-1 mb-10 text-center">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold"> Pacientes y Citas </span>
          </p>
          <div className="md:h-screen overflow-scroll">
          {pacientes.map( pacientes => (
            <PatientComponent
              key={pacientes.id}
              paciente={pacientes}
              setPaciente={setPaciente}
              elminarPacienteId={elminarPacienteId}
            />
            ))}
          </div>
        </>
      ) : (
      <>
      
      <h2 className="font-black text-3xl text-center"> No hay pacientes </h2>
          <p className=" text-xl mt-1 mb-10 text-center">
            Comienza agregando pacientes {' '}
            <span className="text-indigo-600 font-bold"> y apareceran en este lugar </span>
          </p>
      </>) }
     
          
    </div>
  )
}

export default PatientListComponent