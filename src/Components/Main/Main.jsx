import { useContext } from 'react';
import { Context } from '../../App';

export const Main = ({ setToggleAlert }) => {
    const context = useContext(Context)
    return (
        <div>
            <h1>Hello Context</h1>
            <button onClick={ context.toggle }>One Alert</button>
        </div>
    )

}