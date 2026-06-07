import { memo } from 'react'

const Memo = memo(function Memo() {
  console.log('Child Render')
  return <h2>Child Component</h2>
})

export default Memo


// jab kisi file me 2 file attach ho
// first file me state change ho to re-render hoga
// memo me koi change nahi ho raha to use re-render ki koi jarurat nahi
// memo function yaad rakhata hai aur us file ko re-render nahi hone deta  