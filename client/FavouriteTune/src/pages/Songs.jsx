import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Songs = () => {
  const [Data,setData]=useState([])


  useEffect(()=>{

    try {
      const fetchData=async()=>{
        const response = await axios.get("http://localhost:3000/songs/")
        setData(response.data)
        console.log(Data);
      }
      fetchData()
    } catch (error) {
      console.log(error);
    }
   
  },[])
  return (
    <div className='songlistDiv'>
            {Data.map((song)=>(
              <div className='songlist' key={song._id} >
                <div>
                <h3>{song.title}</h3>
                <p>Singer:{song.artist.name}</p>
                </div>

              </div>
              
        ))}
    </div>
  )
}

export default Songs