import '../static/css/Header.css'
import Portal from '../assets/recorte_universidad.png'
export const Header=()=>{
    return (
        <div className='container-universidad'>
            <img src={Portal} className='universidad'></img>
            <div className='text-container'>
                <h1 className='texto'>Universidad Ciencias Médicas de la Habana</h1>
            </div>
        </div>
    )
}