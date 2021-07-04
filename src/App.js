import React, { useContext } from 'react'
import './App.scss';
import Details from './components/detailsBar/DetailsBar'
import ShapeCreater from './components/shapeCreater/ShapeCreater'
import './style/main.scss'
import { useStateValue } from "./stateProvider"
import { PositionSetContext } from "./stateProvider"

function App() {
  const [{ addNewShape,elements },dispatch] = useStateValue()
  const {setMouseX,setMouseY,setName} = useContext(PositionSetContext)

  function onMouseOverHandler(element){
    setMouseX(element.xPosition)
    setMouseY(element.yPosition)
    setName(element.shapeName)
  }

  console.log(useStateValue())
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
            id:`${element.shapeName}`}} onMouseOver={()=>onMouseOverHandler(element)}>
          </div>)}
    </div>
  );
}

export default App;
// 