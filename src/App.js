import React from 'react';
import Main from "./components/Main/Main";
import {BtnProvider} from './components/Context';


const App = () => {
  return (
    <div className=" md:bg-gray-100 md:h-[100vh] md:mt-auto md:flex ">
    <BtnProvider>
        <Main/>
    </BtnProvider>
    </div>

  )
}

export default App