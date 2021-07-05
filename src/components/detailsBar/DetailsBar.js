import React, { useContext } from 'react'
import { useStateValue, PositionDisplayContext,PositionSetContext } from "../../stateProvider"
import { actionTypes } from "../../reducer"

function Details () {
    const [{addNewShape},dispatch] = useStateValue()
    const {mouseX,mouseY,name} = useContext(PositionDisplayContext)
    const { setButton } = useContext( PositionSetContext )

    function addShapeHandler () {
        dispatch({
            type:actionTypes.SET_NEWSHAPE,
            addNewShape:!addNewShape,
        })
        setButton(false)
    }

    return (
        <div className="detailsBar">
            <div className="detailsBarHeader gridLine">
                <h4>Details</h4>
            </div>
            <div className="shapName gridLine">
                <p>{name}</p>
            </div>
            <div className="xPositionDisplay gridLine">
                <p>Mouse X - <span>{mouseX}</span></p>
            </div>
            <div className="yPositionDisplay gridLine">
                <p>Mouse Y - <span>{mouseY}</span></p>
            </div>
            <button className="addShapeButton" onClick={addShapeHandler}>
                +Add a shape
            </button>
        </div>
    )
}

export default Details
