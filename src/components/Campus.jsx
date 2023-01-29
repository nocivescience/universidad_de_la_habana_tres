import '../static/css/Campus.css'
export const Campus=(props)=>{
    return (
        <div className='campus-container'>
            <div className='articulo'>
                {props.imagenes.map((imagen,i)=>(
                    <img key={i} src={imagen}></img>
                ))}
            </div>
            <article className='textos'>
                <h1 className='display-1'>{props.titulo}</h1>
                <p>{props.parrafo}</p>
            </article>
        </div>
    )
}