// import { useState } from 'react';
import { useState } from 'react';

import { Test     } from './Components/Test';
import { Main     } from './Components/Main';
import { Alert    } from './Components/Alert';
import { Context  } from './Components/Context';

import './App.css';

// export const Context = React.createContext()

function App() {
  // const [count, setCount] = useState(0)
  const [toggleAlert, setToggleAlert] = useState(false);

  return (
    <Context.Provider 
    value = {{toggleValue: toggleAlert, toggle: setToggleAlert}}
    >
    <p>This's Vine</p>
    <Test/>
    <Alert/>
    <Main/>
    </Context.Provider>
  )
}

export default App
