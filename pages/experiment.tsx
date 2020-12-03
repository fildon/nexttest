import { useState } from 'react'

const Experiment = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <span>foo</span>
      <button onClick={() => setCount(count => count + 1)}>click me!</button>
      <span>{count}</span>
    </>
  )
}

export default Experiment
