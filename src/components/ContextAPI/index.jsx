import { createContext, useContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
    const myName = "Sakshi";
    const myAge = 20;
    console.log(children)
    return (
        <>
            <BioContext.Provider value={{myName, myAge}} >
                {children}
            </BioContext.Provider >
        </>
    )
}

//custom hooks
export const useBioContext=()=>{
    const context=useContext(BioContext);
    return context;
}




