import React, {useRef} from 'react'
import { DebounceInput } from 'react-debounce-input';
import "../styles/navbar.css"

function NavBar({ setInputString }) {
  
  const inputValue = useRef(null);

  const handleSubmit = (e) =>{
    if(e.key === 'Enter'){
     setInputString(e.target.value)
     e.target.value= ""
    }   
  }

  const handleChange = (e) => {
    if(e.target.value.length >= 3) setInputString(e.target.value)
  }

  return (
    <div className='navbar'>
      <div className='navbar__titleDiv'>
        <h2 className='navbar__title'>APURI</h2>
      </div>

      <div className='navbar__inputDiv'>

        <DebounceInput 
          className='navbar__input'
          type={"text"} 
          placeholder={"Search an anime..."}
          ref={inputValue}
          debounceTimeout={500}
          onKeyDown={(e)=>handleSubmit(e)}
          onChange={(e)=>handleChange(e)}
        />

      </div>
    </div>
  )
}

export default NavBar