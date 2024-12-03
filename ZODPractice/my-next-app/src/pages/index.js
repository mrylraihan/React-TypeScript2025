import { createTodo, getAll } from '@/supabase'
import React, { useRef } from 'react'

function index(props) {
  const todoRef = useRef()
  console.log(props, "Props")

  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    console.log(todoRef.current.value)
    
    fetch('./api/create', {
      method: "POST",
      body: JSON.stringify({ todo: todoRef.current.value })
    })
    .then(res=>res.json())
    .then(console.log)
    .catch(console.error)
  }
  return (
    <>
    <div>
      <h1>Test</h1>
    </div>
    <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>Todo:</label>
            <input type="text" ref={todoRef} />
            <button type='submit'>submit</button>
          </div>
      </form>
    </div>
    
    </>
  )
}

export default index


export const getStaticProps = async () => {
  const todos = await getAll()

  return { props: { todos } }
}