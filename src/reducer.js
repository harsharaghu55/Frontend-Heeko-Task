export const initialState = {
    addNewShape:false,
    shapeName:'',
    height:'',
    width:'',
    xPosition:'',
    yPosition:'',
    elements:[],
}

export const actionTypes = {
    SET_NEWSHAPE:"SET_NEWSHAPE",
    SET_SHAPENAME:"SET_SHAPENAME",
    SET_HEIGHT:"SET_HEIGHT",
    SET_WIDTH:"SET_WEIGHT",
    SET_XPOSITION:"SET_XPOSITION",
    SET_YPOSITION:"SET_YPOSITION",
    SET_ELEMENT:"SET_ELEMENT",
    RESET:"RESET"
}

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_NEWSHAPE:
            return{
                ...state,
                addNewShape:action.addNewShape
            }
        case actionTypes.SET_SHAPENAME:
            return{
                ...state,
                shapeName:action.shapeName
            }
        case actionTypes.SET_HEIGHT:
            return{
                ...state,
                height:action.height
            }
        case actionTypes.SET_WIDTH:
            return{
                ...state,
                width:action.width
            }
        case actionTypes.SET_XPOSITION:
            return{
                ...state,
                xPosition:action.xPosition
            }
        case actionTypes.SET_YPOSITION:
            return{
                ...state,
                yPosition:action.yPosition
            }
        case actionTypes.SET_ELEMENT:
                return{
                    ...state,
                    elements:[...state.elements,action.elements]
                }
        case actionTypes.RESET:
            return{
                ...initialState,
                elements:[...state.elements]
            }
        
        default:
            return state;
        
    }
}

export default reducer;