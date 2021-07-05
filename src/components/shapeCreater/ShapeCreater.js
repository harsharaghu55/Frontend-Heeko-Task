import React, { useEffect } from 'react'
import { useStateValue } from '../../stateProvider'
import { actionTypes } from '../../reducer'

export default function ShapeCreater () {
    const [{ addNewShape, shapeName, height, width, xPosition, yPosition },dispatch] = useStateValue();

    function inputChangeHandler (e) {

        e.preventDefault()
        const {name,value} = e.target
        const action = {}
        const parameters = name.split(" ")
        action.type = actionTypes[parameters[1]]
        action[parameters[0]]=value;
        dispatch(action)

    }

    function createElementHandler () {

        if(shapeName === "" || height === "" || width 
            === "" || xPosition === "" || yPosition === ""){
                alert("Need all manditory fields to filled")
        }else{
                dispatch({
                type:actionTypes.SET_ELEMENT,
                elements:{shapeName,height,width,xPosition,yPosition}
                })
                dispatch({
                    type:actionTypes.SET_NEWSHAPE,
                    addNewShape:!addNewShape,
                })
        }

    }

    function closeButtonHandler () {

        dispatch({
            type:actionTypes.SET_NEWSHAPE,
            addNewShape:!addNewShape,
        })
    }

    useEffect(() => {

        return () => {
            dispatch({
                type:actionTypes.RESET,
            })
        }
    },[])

    return (
        <div className="background">
            <div className="shapeCreaterContainer">
                <div className="shapeCreaterHeader">
                    <h1>Create Shape</h1>
                    <button className="shapeCreaterCloseButton" onClick={closeButtonHandler}>
                        X
                    </button>  
                </div>
                <div className="inputFormForShapeDimensions">
                    <div className="nameOfShape">
                        <p>Name of Shape</p>
                        <input 
                        name="shapeName SET_SHAPENAME"
                        placeholder="Enter shape name"
                        value={shapeName}
                        onChange={inputChangeHandler}/>
                    </div>
                    <div className="inputs">
                        <p>Height</p>
                        <input 
                        type="number"
                        name="height SET_HEIGHT"
                        placeholder="Enter height"
                        value={height}
                        onChange={inputChangeHandler}/>
                    </div>
                    <div className="inputs">
                        <p>Width</p>
                        <input 
                        type="number"
                        name="width SET_WIDTH"
                        placeholder="Enter Weight"
                        value={width}
                        onChange={inputChangeHandler}/>
                    </div>
                    <div className="inputs">
                        <p>X position</p>
                        <input 
                        type="number"
                        name="xPosition SET_XPOSITION"
                        placeholder="Enter X value"
                        value={xPosition}
                        onChange={inputChangeHandler}/>
                    </div>
                    <div className="inputs">
                        <p>Y position</p>
                        <input 
                        type="number"
                        name="yPosition SET_YPOSITION"
                        placeholder="Enter Y value"
                        value={yPosition}
                        onChange={inputChangeHandler}/>
                    </div>
                </div>
                <div className="createNewShapeButtonContainer">
                    <button className="createNewShapeButton" onClick={createElementHandler}>Create New Shape</button>
                </div>
            </div>
        </div>
        
    )
}
