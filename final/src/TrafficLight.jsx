import { useEffect, useState } from 'react'

function TrafficLight() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    
    const interval = setInterval(() => {
      setCount(prevCount => (prevCount + 1) % 3)
    }, 3000)

  
    return () => clearInterval(interval)


  },[count])

  return (
    <>
      <div className='bg-gray-800 p-4 rounded-2xl transition-flat'>
        <div className={`  rounded-full h-12 w-12 p-2 m-3 bg-repeat-round  ${count==0?'bg-red-600 shadow-red-500 shadow-lg  active':'bg-gray-600'}`}></div>
        <div className={` rounded-full h-12 w-12 p-2 m-3 ${count==1?'bg-yellow-600 shadow-yellow-500 shadow-lg active':'bg-gray-600'}`}></div>
        <div className={` rounded-full h-12 w-12 p-2 m-3 ${count==2?'bg-green-600 shadow-green-500 shadow-lg active':'bg-gray-600'} `}></div>
      </div>
    </>
  )
}

export default TrafficLight;


