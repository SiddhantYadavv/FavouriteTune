import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Form = () => {
  const [Artist,setArtist]=useState("")
  const [Title,setTitle]=useState("")
  const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        try {
          if (!Artist || !Title){
            return
          }
          axios.post("http://localhost:3000/songs/",{Artist,Title})
          setArtist("")
          setTitle("")
          navigate("/info")
        } catch (error) {
          console.log(error)
        }
        
    }

  return (
    <div >
    <form className='artistform' onSubmit={handleSubmit} >
        <input type='text' placeholder='Song Artist' value={Artist} onChange={(e)=>(setArtist(e.target.value))} />
        <input type='text' placeholder='Song Title' value={Title} onChange={(e)=>(setTitle(e.target.value))}/>
        <button>Add</button>
    </form>
</div>
  )
}

export default Form