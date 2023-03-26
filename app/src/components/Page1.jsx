import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  "./page1.css";

export const Page1 = () => {
    const navigate = useNavigate()
    let [inputValue,setInput]= useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        inputValue = inputValue.trim()
        if( (!inputValue)|| inputValue === ' '){
            alert('Invalid Input! Plz Enter a Valid String.')
        }
        else{
            navigate('/page2',{ 
                state: inputValue
            })
        }
    }
    return(
        <div className="Container">
            <h1>Screen 1</h1>
            <form>
                <input  type="text" placeholder='Enter your String' onChange={handleChange} />
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}