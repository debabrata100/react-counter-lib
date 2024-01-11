import React, { useState } from 'react'

type Props = {
  value?: number
}
const MyCounter: React.FC<Props> = ({ value = 0 }) => {
  const [counter, setCounter] = useState<number>(value)

  const onPlus = () => {
    setCounter((prev) => +prev + 1)
  }

  const onMinus = () => {
    setCounter((prev) => +prev - 1)
  }

  return (
    <div>
      <h1>Counter: ${counter}</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>+</button>
    </div>
  )
}

export default MyCounter
