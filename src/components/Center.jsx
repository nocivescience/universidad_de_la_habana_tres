import "../static/css/Center.css";
import { CenterComponent } from "./CenterComponent";
import ArticuloLogo from "../assets/articulo-logo.jpg";
import PersonasRecibiendoDiplomas from "../assets/personas-recibiendo-diplomas.jpg";
import FotoAntigua from "../assets/foto-antigua.jpg";
import PersonasSentadas from "../assets/personas-sentadas.jpg";
import DiaDeLaMujer from '../assets/dia-de-la-mujer.jpg'
import Fidel from '../assets/fidel.jpg'
import Urnas from '../assets/urnas.jpg'
import Banderas from '../assets/banderas.jpg'
import Telefono from '../assets/telefono.jpg'
import Guitarra from '../assets/guitarra.jpg'
import Coro from '../assets/coro.jpg'
import Cantante from '../assets/cantante.jpg'
import Estrella from '../assets/estrella.jpg'
import Boletin from '../assets/boletin.jpg'
import Curso from '../assets/curso.jpg'
import HombreConLentes from '../assets/hombre-con-lentes.jpg'
export const Center = () => {
  return (
    <div className="center-container">
      <CenterComponent
        title="Pesquisador Virtual COVID 19"
        parrafo="Nueva herramienta que permite captar información sobre el estado de salud de la población"
        imagenes={[ArticuloLogo]}
      ></CenterComponent>
      <CenterComponent
        title="Acto por el 40 aniversario del destacamento Carlos Juan Finlay"
        parrafo="Un 12 de marzo de 1982 quedó constituido el Destacamento de Ciencias Médicas Carlos Juan Finlay, en honor al eminente científico y médico descubridor del agente transmisor de la fiebre amarrilla.
        Con la presencia de Jorge González Pérez, director de Docencia del Ministerio de Salud Pública, Mairim Lago Queija, rectora de la Universidad de Ciencias Médicas de la Habana y otros representantes de la universidad, dirigentes de la Unión de Jóvenes Comunistas, Federación Estudiantil Universitaria y Federación Estudiantil de la Enseñanza Media se realiza el acto por el 40 aniversario de la constitución del destacamento Carlos Juan Finlay."
        imagenes={[PersonasRecibiendoDiplomas,FotoAntigua,PersonasSentadas]}
      ></CenterComponent>
      <CenterComponent
        title="Día Internacional de la Mujer"
        parrafo="La Universidad de Ciencias Médicas de La Habana quiere felicitar a todas las mujeres del mundo y   en especial a las trabajadoras de la institución. Les regalamos este hermoso poema:        
            Mirada tierna, sonrisa seductora
            Un sueño del hombre es siempre tenerla
            Junto a ellas imaginan miles de cosas
            Escriben los poemas en sus prosas
            Regalan la luna y miles de rosas."
        imagenes={[DiaDeLaMujer]}
      ></CenterComponent>
      <CenterComponent
        title="Recinto ferial de Expocuba: Protagonismo juvenil en la Feria de Salud Cubana (+fotos)"
        parrafo="El recinto ferial Expocuba acogió en el pabellón de salud a la Universidad de Ciencias Médicas de La Habana con mucho júbilo y entusiasmo. Muestra de la ciencia cubana y sus logros en la actualidad se vio reflejado en el intercambio de presentadores y participantes.
        En calidad de exhibición se dispuso a los presentes una muestra del quehacer docente-investigativo y asistencial de la salud cubana en estos últimos años enalteciendo los logros del sector de la salud."
        imagenes={[Fidel, Banderas, Urnas]}
      ></CenterComponent>
      <CenterComponent
        title="Certificado digital de vacunación cubano"
        parrafo="La digitalización llego para ser partes de nuestra vida, y desde el 14 de febrero se encuentra habilitado “Certificado Digital de Vacunación de la República de Cuba“. La vacunación que se realizó en todo el país con la presencia de los profesionales de la salud y el apoyo de las diferentes organizaciones estudiantiles y de masa logra impactar en el mundo digital."
        imagenes={[]}
      ></CenterComponent>
      <CenterComponent
        title="Nuestra cultura hace gala en la Universidad de Ciencias Médicas de La Habana (+ Fotos)"
        parrafo="Se celebra en la Universidad de Ciencias Médicas de La Habana (UCMH) Gala Cultura en saludo al centenario de la Federación Estudiantil Universitaria, al 60 aniversario de la Unión de Jóvenes Comunistas y al 52 aniversario de la Federación Estudiantil de la Enseñanza Media."
        imagenes={[Guitarra,Coro,Cantante]}
      ></CenterComponent>
      <CenterComponent
        title="Puertas abiertas al Congreso Universidad 2022"
        parrafo="Quedó inaugurada este lunes el Congreso Internacional de Educación Superior: “Universidad 2022” con la conferencia “Gestión de gobierno basada en ciencia e innovación: avances y desafíos” del Dr. C. Miguel Díaz-Canel Bermúdez. Se estará desarrollando del 7 al 11 de febrero del 2022 y la Universidad de Ciencias Médicas de La Habana presentará diversos trabajos que avalan el desarrollo sostenible e inclusivo en la comunidad."
        imagenes={[Estrella]}
      ></CenterComponent>
      <CenterComponent
        title="Boletín de la Universidad de Ciencias Médicas de La Habana"
        parrafo="Mediante esta publicación queremos dar a conocer el primer número del Boletín Universitario que saldrá con una frecuencia  mensual. Contiene diferentes secciones en las que se publicarán noticias del mes precedente, investigaciones pertinentes en el campo científico-médico, así como también algunas curiosidades y elementos para mejorar nuestra salud. de igual forma invitamos a todos nuestros lectores para que nos hagan conocer cualquier inquietud o publicación que quieran incluir en este Boletín.
        Agradecidos, equipo editorial."
        imagenes={[Boletin]}
      ></CenterComponent>
      <CenterComponent
        title="Convocatoria para el Curso virtual “Tutores para el aprendizaje en red”"
        parrafo="El Centro Nacional de Información de Ciencias Médicas, convoca al curso virtual “Tutores para el aprendizaje en red” que será del 1ro de noviembre al 24 de diciembre de 2021. Está dirigido a profesores universitarios del sistema nacional de salud, que se desempeñan como tutores de cursos en red en las modalidades virtual y mixta. Tendrá la modalidad de curso a distancia completamente virtual, a nivel internacional, con sede en el Aula Virtual de Salud (http://aulavirtual.sld.cu).
        El objetivo es que los profesores desarrollen habilidades metodológicas y tecnológicas en la tutoría en el Aula Virtual de Salud, mediante la experimentación con la plataforma Moodle y la construcción del rol del tutor para el aprendizaje en red."
        imagenes={[Curso]}
      ></CenterComponent>
      <CenterComponent
        title="Fallece el profesor Dr.C. Oscar Beto Alonso Chil"
        parrafo="El pasado 7 de octubre de 2021 falleció, víctima de la COVID-19, sus complicaciones y comorbilidades, el insigne y querido profesor de Medicina Interna, Oscar Beto Alonso Chil, Dr. en Ciencias Médicas, especialista de II grado, profesor titular de Mérito y consultante en Medicina Interna de la Universidad de Ciencias Médicas de La Habana."
        imagenes={[HombreConLentes]}
      ></CenterComponent>
    </div>
  );
};
