import {useState, useEffect} from 'react';
import ErrorComponent from './ErrorComponent';



const FormComponent = ({pacientes,setPacientes,paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const[error, setError] = useState(false);

  useEffect(() => {
    //comprobar si un obj tiene algo
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
    
  },[paciente]);

  
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };


  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validacion del formulario
    if ([nombre, propietario,email,fecha,sintomas].includes('')) {
      
      setError(true);
      return;
    }

    setError(false);
    //objeto de pacioentes
    const objPatient = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      //console.log('Editando');
      //Editando registro
      objPatient.id = paciente.id;
      console.log(objPatient);
      console.log(paciente);

      const pacientesActualizados = pacientes.map((pacienteState => pacienteState.id === 
        paciente.id ? objPatient:pacienteState))
      
      setPacientes(pacientesActualizados);
      setPaciente({});
      
    }else{
      
      //generar ID
      objPatient.id =   generarId();
      //nuevo registro
      //metodo inmutable
      //Tomar una copia de lo que ya existe y agrega al final el nuevo dato
      setPacientes([...pacientes, objPatient]);
      
    }

    


    //reiniciar form correctamente
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Segumiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-5">
          Añade Pacientes y {' '}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-b-lg py-10 px-5 mb-10">
           {error && 
            <ErrorComponent> 
              <p>Todos los campos son obligatorios </p> 
            </ErrorComponent>
           } 
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold" >
              Mascota
            </label>
            <input 
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
              value={nombre}
              onChange={(e)=>{
                setNombre(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold" >
              Nombre Dueño
            </label>
            <input 
              id="propietario"
              type="text"
              placeholder="Nombre del dueño"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e)=>{
                setPropietario(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >Email</label>
            <input 
              id="email"
              type="email"
              placeholder="Email contacto"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold" >Alta</label>
            <input 
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e)=>{
                setFecha(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold" >Sintomas</label>
            <textarea
              id="sintomas"  
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los sintomas"
              value={sintomas}
              onChange={(e)=>{
                setSintomas(e.target.value);
              }}
            />
          </div>
          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase 
            font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
            value={paciente.id ? 'Editar Paciente' : "Agregar paciente"}
          />
        </form>
    </div>
  )
}


export default FormComponent;