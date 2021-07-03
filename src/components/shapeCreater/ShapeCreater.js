import React from 'react'

export default function ShapeCreater() {
    return (
        <div className="background">
            <div className="shapeCreaterContainer">
                <div className="shapeCreaterHeader">
                    
                </div>
                <div className="inputFormForShapeDimensions">
                    <div className="nameOfShape">
                        <p>Name of Shape</p>
                        <input placeholder="Enter shape name"/>
                    </div>
                    <div className="inputs">
                        <p>Height</p>
                        <input placeholder="Enter height"/>
                    </div>
                    <div className="inputs">
                        <p>Weight</p>
                        <input placeholder="Enter Weight"/>
                    </div>
                    <div className="inputs">
                        <p>X position</p>
                        <input placeholder="Enter X value"/>
                    </div>
                    <div className="inputs">
                        <p>Y position</p>
                        <input placeholder="Enter Y value"/>
                    </div>
    
                </div>
                <button className="createNewShapeButton">Create New Shape</button>
            </div>
        </div>
        
    )
}
