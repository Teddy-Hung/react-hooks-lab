import React, {useState, useEffect} from 'react'

const AddTodo = (props) => {
    const [userInput, setUserInput] = useState('')

    return(
        <div>
            <input className='inputBox' value={userInput} placeholder='Add a todo!' onChange={e => setUserInput(e.target.value)}></input>
            <button onClick={() => {
                props.addFn(userInput)
                setUserInput('')
            }}>
                Submit
            </button>
        </div>
    )
}

export default AddTodo