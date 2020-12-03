import { useState } from 'react'

const ButtonClicker = (props: { buttonMessage: string }): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>{props.buttonMessage}</button>
      <span>{count}</span>
    </>
  )
}

export default ButtonClicker
