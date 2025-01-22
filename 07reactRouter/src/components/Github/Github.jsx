import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] =useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/surajmaurya93")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    


  return (
    <div className='text-center m-4 bg-gray-600 text-white py-4 text-3xl'>
      Github Followers: {data.followers}
      <br />
      Github Followings: {data.following}
      <img src="{data.avatar_url}" alt="git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/surajmaurya93")
    return response.json()
}