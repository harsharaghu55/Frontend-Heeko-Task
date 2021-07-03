import './App.scss';
import Details from './components/detailsBar/DetailsBar';
import ShapeCreater from './components/shapeCreater/ShapeCreater';
import './style/main.scss'


function App() {
  return (
    <div className="App">
    {true ? <ShapeCreater/>:<Details/>}
    </div>
  );
}

export default App;
