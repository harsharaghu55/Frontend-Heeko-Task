import React, { useContext,useState } from 'react'
import './App.scss';
import Details from './components/detailsBar/DetailsBar'
import ShapeCreater from './components/shapeCreater/ShapeCreater'
import './style/main.scss'
import { useStateValue } from "./stateProvider"
import { PositionSetContext,PositionDisplayContext } from "./stateProvider"
import { actionTypes } from "./reducer"

function App () {
  const [{ addNewShape,elements },dispatch] = useStateValue()
  const { setMouseX, setMouseY, setName, setButton } = useContext(PositionSetContext)
  const { deletButton } = useContext(PositionDisplayContext)
  const [selectedShapeId,setSelectedShapeId] = useState('')

  function onClickHandler (e) {

    e.preventDefault()
    if(e.target.id === selectedShapeId){
      setSelectedShapeId('')
      setButton(false)
    }else{
      setSelectedShapeId(e.target.id)
      setButton(true)
    } 

  }

  function deleteClickHandler () {

    const newElements = elements.filter((ele,index)=> ele.shapeName !== selectedShapeId )
    dispatch({
      type:actionTypes.SET_DELETE,
      elements:newElements,
    })
    setButton(false)
    setSelectedShapeId('')

  }

  function onMouseOverHandler (element){

    setMouseX(element.xPosition)
    setMouseY(element.yPosition)
    setName(element.shapeName)

  }

  return (
    <div className="App">
    {addNewShape && addNewShape ? <ShapeCreater/>:<Details/>}
    {elements && elements.map((element,index)=>
      <div key={index} style={{
        height:`${Number(element.height)}px`,
        width:`${Number(element.width)}px`,
        position:'absolute',
        top:`${Number(element.xPosition)}px`,
        left:`${Number(element.yPosition)}px`,
        backgroundColor:"#0948EA33",
        border:`${selectedShapeId === element.shapeName ? "1px solid blue":"none"}`}} 
        id={element.shapeName}
        onMouseOver={()=>onMouseOverHandler(element)}
        onClick={onClickHandler}>
      </div>)
    }
    {deletButton && <button className="deleteButton" onClick={deleteClickHandler}> Delete </button>}
    </div>
  );
}

export default App;