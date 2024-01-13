import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider =({children})=>{


    
    const contextValue = {}

    return(
        <ApiContext.Provider value={contextValue}>
            {children}
        </ApiContext.Provider>
    )
}