import {useState, createContext} from 'react';

export const BtnContext = createContext();

export const BtnProvider =  ({children}) => {
    const [currStep, setCurrStep] = useState(1)
    return(
        <BtnContext.Provider value={[currStep, setCurrStep]}>
            {children}
        </BtnContext.Provider>
    )
};
