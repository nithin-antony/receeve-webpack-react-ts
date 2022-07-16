import React, { useState } from 'react'
import './index.scss'

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>React Typescript Webpack</h1>
      <button name="Increment" onClick={() => setCount(count + 1)} />
      <h2>Count value: {count}</h2>
    </>
  )
}
