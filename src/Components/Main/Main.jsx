import { useContext } from 'react';
// import { Context } from '../../App';
import { Context } from '../Context/Context';

export const Main = () => {
    const context = useContext(Context)
    return (
        <div>
            <h1>Hello Context</h1>
            <button onClick={ () => context.togle(prev => !prev) }>
                One Alert
            </button>
        </div>
    )

}