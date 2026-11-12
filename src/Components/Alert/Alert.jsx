import { useContext } from 'react';
// import { Context    } from '../../App';
import { Context } from '../Context/Context';

export const Alert = () => {
    const context = useContext(Context)
    console.log('context :>>', context);
    console.log(context);
    
    return (
    context.toggleValue &&(
         <div>Mesaaage</div>
    )
)
}