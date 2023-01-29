import '../static/css/center-component.css'
export const CenterComponent=(props)=>{
    return (
        <div className='article-container'>
            <div className='interior'>
                <div className='container-images'>
                    {props.imagenes.map((imagen,i)=>(<img key={i} src={imagen}></img>))}
                </div>
                <div className='textos'>
                    <h2 className='title display-6'>{props.title}</h2>
                    <p>{props.parrafo}</p>
                </div>
            </div>
        </div>
    )
}