import '../static/css/Cuerpo.css'
import {Left} from './Left'
import { Center } from './Center'
import { Right } from './Right'
export const Cuerpo=()=>{
    return (
        <div className='cuerpo-container'>
            <Left></Left>
            <Center></Center>
            <Right></Right>
        </div>
    )
}