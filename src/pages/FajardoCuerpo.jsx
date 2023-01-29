import { CenterComponent } from "../components/CenterComponent"
import Corazon from '../assets/corazon.jpg'
import PersonasConComputador from '../assets/personas-con-computador.jpg'
import GrupoDePersonas from '../assets/grupo-de-personas.jpg'
import Barco from '../assets/barco.jpg'
import PersonasParadas from '../assets/personas-paradas.jpg'
import MedicosDePie from '../assets/medicos-de-pie.jpg'
import '../static/css/Fajardo.css'
export const FajardoCuerpo=()=>{
    const cuerpos=[
        [
            [],
            'Convocatoria a Curso “Herramientas para la publicación de artículos en revistas científicas.',
            'El Taller “Herramientas para la publicación de artículos en revistas científicas” tiene como objetivos la elaboración de un artículo científico y su postulación para publicación en una revista científica. El taller tiene un alcance municipal y está dirigido a los Profesores y/o Investigadores de los Policlínicos, Hospitales e Institutos, así como de otras instituciones de salud del municipio y a los Profesores y/o Investigadores de la Facultad.'
        ],[
            [Corazon],
            'Feliz Día de la Medicina Latinoamericana',
            'La Facultad Manuel Fajardo de la Universidad de Ciencias Médicas de La Habana envía felicitaciones a todo el personal de la medicina cubana en especial a los de la Institución'
        ],[
            [GrupoDePersonas,PersonasConComputador],
            'Reinauguración de los laboratorios de Ciencias Básicas y locales de Marxismo e Historia',
            'Por: Lic. Lilianis Becerra Paz. Reinauguran los laboratorios de Ciencias Básicas y locales de los departamentos de Marxismo e Historia y Ciencias Básicas tras proceso de reparación. Restablecimiento de importantes espacios para el desarrollo exitoso del proceso de enseñanza-aprendizaje en la Facultad Manuel Fajardo de la UCMH',
        ],[
            [Barco],
            'Efemerides',
            'La Facultad Manuel Fajardo de la Universidad de Ciencias Médicas de La Habana envía Felicitaciones a los combatientes de las Fuerzas Armadas Revolucionarias en estos sus 66 años de victorias, preservando la soberanía e integridad de la Patria.'
        ],[
            [PersonasParadas],
            'Día Mundial de respuesta al VIH',
            'Por: Lic. Lilianis Becerra Paz. Estudiantes de Medicina desde la asignatura Promoción de Salud, realizan actividad extensionista en el Preuniversitario “Saúl Delgado”, en el Vedado capitalino por el Día Mundial de lucha contra el SIDA, con la participación de profesores,trabajadores y directivos del Policlínico Universitario “Héroes del Moncada” y la destacada intervención de un residente argentino que cursa diplomado en la institución. Excelente expresión del tríptico misional universitario en la Facultad Manuel Fajardo de la Universidad de Ciencias Médicas de la Habana'
        ],[
            [MedicosDePie],
            '62 Aniversario de la caída en combate de Piti Fajardo',
            'Por: Lic. lilianis becerra Paz. Visita del mes a la facultad Manuel Fajardo, coincidiendo con el 62 aniversario de la caída en combate del médico, combatiente, maestro y revolucionario ejemplar Piti Fajardo, fiel a la obra transformadora del invicto Comandante en Jefe.'
        ]
    ]
    return (
        <div>
            {cuerpos.map((cuerpo,i)=>(
                <CenterComponent
                    key={i}
                    imagenes={cuerpo[0]}
                    title={cuerpo[1]}
                    parrafo={cuerpo[2]}
                ></CenterComponent>
            ))}
        </div>
    )
}