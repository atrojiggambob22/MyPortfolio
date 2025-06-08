import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import "./index.css"
import './App.css'

// import './Portfolio.css';
import Portfolio from './Portfolio'
// import Scroller from "./Scroller"
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <Scroller/> */}
   <Portfolio/>
   </>
  )
}

export default App
