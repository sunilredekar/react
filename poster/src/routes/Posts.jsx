import { useState } from 'react'
import '../App.css'
import { PostsList } from '../components/PostsList'
import { Outlet } from 'react-router-dom'

function Posts() {

  return (
    <>
      <Outlet/>
      <main>
        <PostsList />
      </main>
    </>
  )
}

export default Posts

export async function postLoader() {
  const response = await fetch("http://localhost:8080/posts")
  const resData = await response.json();

  return resData.posts;
}
