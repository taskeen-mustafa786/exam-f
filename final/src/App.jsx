import { useEffect, useState } from 'react'
import './App.css'

// Use the provided GIF to observe:
// The sequence of light changes (Red → Yellow → Green → Red...)
// Each light stays active for 3 seconds
// Only one light is active at a time
// Smooth transitions and style

//  Light Logic
// Use useState to track the current light (red/yellow/green)
// Use useEffect with setInterval to change light every 3 seconds
// Apply active CSS class to the current light


function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    
    const interval = setInterval(() => {
      setCount(prevCount => (prevCount + 1) % 3)
    }, 3000)

    // Clear the interval on component unmount
    return () => clearInterval(interval)


  },[count])

  return (
    <>
      <div className='bg-gray-800 p-4 rounded-2xl'>
        <div className={` rounded-full h-12 w-12 p-2 m-2 ${count==1?'bg-red-600':'bg-gray-600'}`}></div>
        <div className={` rounded-full h-12 w-12 p-2 m-2 ${count==2?'bg-red-600':'bg-gray-600'}`}></div>
        <div className={` rounded-full h-12 w-12 p-2 m-2 ${count==3?'bg-red-600':'bg-gray-600'} `}></div>
      </div>
    </>
  )
}

export default App

// Commit # Commit Message
// Initial commit: add static HTML and CSS
// for traffic light
// Refactor: convert to functional React
// component
// Feature: implement light cycle logic 3
// with useEffect
// Style: enhance UI with transitions and 4
// active styles
// Task
// Setup project and layout (3
// lights, no logic)
// JSX structure for lights, apply
// classes
// Cycle lights every 3s using state
// + effect
