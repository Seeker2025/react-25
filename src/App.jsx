// import { useState } from 'react';
import  React, { useState } from 'react';

import { Test } from './Components/Test';
import { Main } from './Components/Main';
import { Alert } from './Components/Alert';

import './App.css';

export const Context = React.createContext()

function App() {
  // const [count, setCount] = useState(0)
  const [toggleAlert, setToggleAlert] = useState(false);

  return (
    <Context.Provider value = {{toggleValue: toggleAlert, togle: setToggleAlert}}>
      <p>This's Vine</p>
      <Test/>
      <Alert/>
      <Main setToggleAlert = {() => setToggleAlert((prev)=>!prev)}/>
    </Context.Provider>
  )
}

export default App
