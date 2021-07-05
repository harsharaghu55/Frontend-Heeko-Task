import React, {createContext, useReducer,useContext,useState} from "react"

export const StateContext = createContext()
export const PositionSetContext = createContext()
export const PositionDisplayContext = createContext()

export const StateProvider = ({ reducer,initialState,children }) => {
    const [mouseX,setMouseX] = useState();
    const [mouseY,setMouseY] = useState();
    const [name,setName] = useState("--");
    const [deletButton,setButton] = useState(false)

    return(
        <StateContext.Provider value={ useReducer(reducer, initialState) }>
            <PositionSetContext.Provider value={{ setMouseY,setMouseX,setName,setButton}}>
                <PositionDisplayContext.Provider value={{mouseX,mouseY,name,deletButton}}>
                    {children} 
                </PositionDisplayContext.Provider>   
            </PositionSetContext.Provider>
        </StateContext.Provider>  
    )
}

export const useStateValue = () => useContext(StateContext)

