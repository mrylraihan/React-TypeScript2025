import { getAll } from '@/supabase'
import React from 'react'

function index(props) {
  console.log(props)
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default index


export const getStaticProps = async () => {
  const todos = await getAll()

  return { props: { todos } }
}