import React, { useContext } from 'react';
import { Context } from '../../App';

export const Alert = () => {
    const context = useContext(Context)
    console.log('context :>>', context);
    
    return (
    context.toggleValue &&(
         <div>Mesaaage</div>
    )
)
}