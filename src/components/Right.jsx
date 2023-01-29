import '../static/css/Right.css'
import Calendar from 'react-calendar'
import { RightComponent } from './RightComponent'
export const Right=()=>{
    return (
        <div className='tercer-elemento'>
            <div className='calendar-container'>
                <Calendar></Calendar>
            </div>
            <RightComponent
                title='REVISTAS DE INTERÉS UCMH'
                lista={['Revista Habanera de Ciencias Médicas','Revista 16 de abril','Revista cubana de Informática Médica']}
            ></RightComponent>
            <RightComponent
                title='BOLETÍNES'
                lista={['Boletín trastornos adictivos','Boletín promocional de Enfermería']}
            ></RightComponent>
            <RightComponent
                title='BIBLIOTECA'
                lista={['Ciencias Básicas','Especialidades clínicas','Salud Pública','Bases de datos nacionales','Bases de datos internacionales']}
            ></RightComponent>
            <RightComponent
                title='EVENTOS'
                lista={['Convocatoria Estudiantes investigadores 2020','Convocatoria Jóvenes Investigadores- Premio CITMA 2020','Convocatoria Jóvenes Tecnólogos a Premio CITMA 2020']}
            ></RightComponent>
            <RightComponent
                title='ACTUALIZACIÓN'
                lista={['Actualizado: 12 de marzo de 2022','Creado: 7 de septiembre de 2011']}
            ></RightComponent>
        </div>
    )
}