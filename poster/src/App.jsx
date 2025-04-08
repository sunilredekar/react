import { useState } from 'react'
import './App.css'
import { PostsList } from './components/PostsList'
import MainHeader from './components/MainHeader'

function App() {
  const [showModal, setShowModal] = useState(false);
  
  function showModalHandler() {
    setShowModal(!showModal);
  }
  function hideModalHandler() {
    setShowModal(!showModal);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList 
        onPosting={showModal}
        onStopPosting = { hideModalHandler} 
      />

    </>
  )
}

export default App
