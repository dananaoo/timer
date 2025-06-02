import './index.css';
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Timer from './page/Timer'
import Props from './page/Props'
function App() {


  return (
        <Routes>
          <Route path="/" element ={<Timer></Timer>}></Route>
          <Route path="/props" element ={<Props></Props>}></Route>
        </Routes>
      
  )
}

export default App
