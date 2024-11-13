import React, {type FormEvent } from 'react'


function NewGoal(props:{addGoal:()=>void}) {

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log("Test")
        let id = Math.random()
        new FormData(event.currentTarget)
        props.addGoal()
    }
  return (
		<form onSubmit={(handleSubmit)}>
			<p>
				<label htmlFor='goal'>Your Goal</label>
				<input id='goal' type='text' name='goal'/>
			</p>
			<p>
				<label htmlFor='summary'>Your Goal</label>
				<input id='summary' type='text' name='summary'/>
			</p>
			<p>
				<button type='submit'>Add Goal</button>
			</p>
		</form>
	)
}

export default NewGoal
