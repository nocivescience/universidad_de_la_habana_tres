import '../static/css/RightComponent.css'
export const RightComponent=(props)=>{
    return (
        <div className='right-container'>
            <h1 className='display-3'>{props.title}</h1>
            {props.lista.map((element,i)=>(<div key={i}><p>{element}</p><hr/></div>))}
        </div>
    )
}