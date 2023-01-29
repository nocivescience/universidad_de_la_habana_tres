import '../static/css/LeftComponent.css'
export const LeftComponent=(props)=>{
    return (
        <div className='left-component'>
            <h4 className='left-titulo'>{props.titulo}</h4>
            <ul>
            {props.lista.map(i=>(<li className='lista-li' key={i}><a>{i}</a></li>))}
            </ul>
        </div>
    )
}