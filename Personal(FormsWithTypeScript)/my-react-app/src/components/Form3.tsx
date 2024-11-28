import React, { useRef, useState } from 'react'

function Form3() {
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const [fullName, setFullName] = useState<string>('')
    
    console.log("Form3")
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(firstNameRef.current!.value)
        const firstName = firstNameRef.current!.value
        console.log(lastNameRef.current!.value)
        const lastName = lastNameRef.current!.value
        firstNameRef.current!.value= ""
        lastNameRef.current!.value= ""
        setFullName(`${firstName} ${lastName}`)
    }
  return (
		<div>
            <h1>FullName: {fullName}</h1>
            <h3>FirstName: {firstNameRef.current!.value}</h3>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						First Name:
						<input type='text' id='firstName' name='firstName' ref={firstNameRef}/>
					</label>
				</div>
				<div>
					<label>
						Last Name:
						<input type='text' id='lastName' name='lastName' ref={lastNameRef}/>
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Form3
