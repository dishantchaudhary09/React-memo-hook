import { useState } from 'react'
import Memo from './Memo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
      <Memo />
    </>
  );
}

export default App;
