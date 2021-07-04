import React, {createContext, useReducer,useContext,useState} from "react"

export const StateContext = createContext()
export const PositionSetContext = createContext()
export const PositionDisplayContext = createContext()

export const StateProvider = ({ reducer,initialState,children }) => {
    const [mouseX,setMouseX] = useState();
    const [mouseY,setMouseY] = useState();
    const [name,setName] = useState("--");
    return(
        <StateContext.Provider value={ useReducer(reducer, initialState) }>
            <PositionSetContext.Provider value={{ setMouseY,setMouseX,setName}}>
                <PositionDisplayContext.Provider value={{mouseX,mouseY,name}}>
                    {children} 
                </PositionDisplayContext.Provider>   
            </PositionSetContext.Provider>
        </StateContext.Provider>  
    )
}

export const useStateValue = () => useContext(StateContext)

