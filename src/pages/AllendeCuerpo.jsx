import { Campus } from '../components/Campus'
import CoronavirusCuba from '../assets/coronavirus-cuba.jpeg'
import MedicosEnJardin from '../assets/medicos-en-jardin.jpg'
import PersonasCelebrando from '../assets/personas-celebrando.jpg'
import PersonasEnElHall from '../assets/personas-en-el-hall.jpg'
import PersonaConferenciando from '../assets/persona-conferenciando.jpg'
import TresPersonas from '../assets/tres-personas.jpg'
import EnUnaMesa from '../assets/en-una-mesa.jpg'
import Comedor from '../assets/comedor.jpg'
import LibrosParaEstudiantes from '../assets/libros-para-estudiantes.jpg'
import BanderasYFidel from "../assets/banderas-y-fidel.jpg";
import BastionUniversitario from '../assets/bastion-universitario.jpg'
export const AllendeCuerpo=()=>{
    const descripciones=[
        [
            [CoronavirusCuba],
            'Cifras sobre COVID-19 en Cuba',
            'Al cierre del día de ayer, 8 de enero, se encuentran ingresados 151 pacientes, sospechosos 50 y confirmados activos 101. En el día en Cuba para la COVID-19 se realizaron un total de 878 muestras para la vigilancia, resultando positivas 24. El país acumula 14 millones 281 mil 930 de muestras realizadas y 1 millón 112 mil 177 positivas.'
        ],[
            [MedicosEnJardin],
            'Actividad Parque La Asunción',
            'Actividad en el Parque de la Asunción con la UJC, PCC municipal de 10 de octubre, la Facultad Salvador Allende con actividades en la comunidad.'
        ],[
            [PersonasCelebrando],
            'Actividad por el Día Árabe en la Habana',
            'Actividad por el Día Árabe en la Habana donde participaron 11 nacionalidades, mostrando sus culturas, participan los alumnos de la Facultad Salvador Allende en la Danza y modelaje, magnífica actividad donde participan el MINSAP, MINREX y otras autoridades, Muchas Felicidades.'    
        ],[
            [PersonasEnElHall],
            'Entrega de Condecoraciones',
            'Velit consectetur anim proident minim dolor ipsum cillum. Esse sint tempor nostrud nostrud veniam qui sint quis officia id cillum ex. Pariatur id amet tempor est magna ut. Enim do occaecat ex laborum ea culpa magna deserunt. Anim nisi occaecat eu sint exercitation culpa cillum nostrud deserunt amet nisi quis. Officia sunt qui cillum fugiat ipsum et. Cillum Lorem labore incididunt ex mollit et consectetur id ullamco in est culpa magna nulla. Deserunt minim qui cupidatat proident et veniam laboris sint nostrud mollit. Nulla aliqua quis dolor duis nulla qui in eiusmod nulla eu cupidatat aliquip. Commodo eiusmod consequat magna est enim sunt culpa eiusmod velit commodo est dolor fugiat. Ex nisi ullamco minim officia fugiat voluptate sit magna proident id. Eiusmod sit pariatur et dolore mollit pariatur nisi elit amet nisi culpa aliqua. Et excepteur dolor elit in tempor amet dolor aute aliqua.'
        ],[
            [PersonaConferenciando],
            'Conferencia Magistral',
            'En la mañana de hoy se celebró la Conferencia Magistral del Dr. C. Fernando Domínguez Dieppa, Doctor en Ciencias Médicas, Especialista de 1er y 2do grado en Neonatología y Profesor e Investigador Titular.'
        ],[
            [TresPersonas],
            'Alumnos Ayudantes de Ciencias Básicas-FACSA',
            'Actividad con Alumnos Ayudantes de Ciencias Básicas en la Facultad Salvador Allende.'
        ],[
            [EnUnaMesa],
            'Visita del MES a la Facultad',
            'Control del MES al Departamento de PPD de la Facultad Salvador Allende con resultados satisfactorios. ¡Muchas Felicidades!'
        ],[
            [Comedor],
            'Intercambio de profesores de Rumanía-Cuba',
            'Visita de intercambio académico con profesores de Rumanía en la Facultad Salvador Allende, mostrando los logros alcanzados en la Ciencias Básicas, Informática y uso del aula virtual.'
        ],[
            [LibrosParaEstudiantes],
            'Feria del Libro Universitaria',
            'Feria del Libro Universitaria en la Facultad Salvador Allende.'
        ],[
            [BanderasYFidel],
            'Recordando a Fidel',
            'Siempre estarás presente y serás eterno, libro de firmas en la Facultad Salvador Allende, en tributo a nuestro eterno Líder Fidel.'
        ],[
            [BastionUniversitario],
            'Bastión Universitario',
            'Hoy nuestros estudiantes y trabajadores participaron en el ejercicio del Bastión Universitario. El compromiso con la Revolución y la Defensa de la Patria se consolidaron y se funden con estas actividades. Allende, Siempre en combate!!'
        ]
    ]
    return (
        <div className='allende-container'>
            {descripciones.map((descripcion,i)=>(
                <Campus
                    key={i}
                    imagenes={descripcion[0]}
                    titulo={descripcion[1]}
                    parrafo={descripcion[2]}
                ></Campus>
            ))}
        </div>
    )
}