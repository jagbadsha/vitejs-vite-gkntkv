import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  const increment = () => setCount(count + multiplier)
  const updateMultiplier = () => setMultiplier(multiplier * 2)

  return (
    <div className="card">
      <button onClick={increment}>
        count is {count}
      </button>
      <button onClick={updateMultiplier} style={{ marginLeft: '1rem' }}>
        multiplier: {multiplier}x
      </button>
      <p>
        Hot Module Replacement (HMR) keeps the app running and preserves state
      </p>
    </div>
  )
}