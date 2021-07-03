import React from 'react'

function Details() {
    return (
        <div className="detailsBar">
            <div className="detailsBarHeader gridLine">
                <h4>Details</h4>
            </div>
            <div className="shapName gridLine">
                <p>Shape-1</p>
            </div>
            <div className="xPositionDisplay gridLine">
                <p>Mouse X - <span>400</span></p>
            </div>
            <div className="yPositionDisplay gridLine">
                <p>Mouse Y - <span>300</span></p>
            </div>
            <button className="addShapeButton" onClick={()=>console.log("clicked")}>
                +Add a shape
            </button>
        </div>
    )
}

export default Details
