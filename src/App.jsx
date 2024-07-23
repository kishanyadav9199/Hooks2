import { createContext, useContext } from 'react'
import './App.css'
import Hero from './components/Hero'
import { ConterContext } from "./context/counter"
function App() {
  const counterState= useContext(ConterContext)
  console.log(counterState);
  return (
    <div className='App'>
      <h1 className='text-center mt-24 font-bold text-3xl'> Count is {counterState.count}</h1>
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </div>
  )
}

export default App
