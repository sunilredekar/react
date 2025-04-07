import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/post'
import { PostsList } from './components/PostsList'

function App() {
  const [count, setCount] = useState("Hello world 123");

  return (
    <>
      <h1>{count}</h1>
      <PostsList posts={[{ id: 1, title: "Post 1", content: "This is post 1" }, { id: 2, title: "Post 2", content: "This is post 2" }]} />

    </>
  )
}

export default App
