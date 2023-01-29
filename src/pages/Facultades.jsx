import "../static/css/Facultades.css";
import {Link} from 'react-router-dom'
export const Facultades = () => {
  const facultades=[
    'FCM. Calixto García',
    'FCM. Manuel Fajardo',
    'FCM. Dr. Salvador Allende',
    'FCM. 10 de Octubre',
    'FCM. Dr. Miguel Enriquez',
    'FCM. Enrique Cabrera',
    'FCM. Julio Trigo',
    'FCM. Finlay- Albarrán',
    'ICBP. Victoria de Girón Facultad de Estomatología0',
    'Raúl González Sánchez',
    'Facultad de Enfermería Lidia Doce Facultad de Tecnología de la Salud',
    'Facultad Preparatoria de Cojímar'
  ]
  const enlaces=[
    '/facultades/calixto',
    '/facultades/fajardo',
    '/facultades/allende',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
  ]
  return (
    <div className="container-facultades">
      <h1 className="display-1">Facultades de Ciencias Médicas de la UCMH</h1>
        <ul>
          {facultades.map((facultad,i)=>(
            <li key={i} className='enlace-facultad'><Link className="facultad" to={enlaces[i]}>{facultad}</Link></li>
          ))}
        </ul>
    </div>
  );
};
