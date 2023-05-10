import React from 'react'
import './Error.css'
import { NavLink } from 'react-bootstrap'

const Error = () => {
  return (
    <div className='setStyle2'>
      <img src='https://www.yoannuzan.com/file/2015/10/image-erreur-404.png' alt='error' style={{marginLeft : "300px" , marginTop : "100px"}}/>
      <h1>Sorry , This Page doesn't exist!</h1>
      <button className='eler'><NavLink href='/'>Go Back</NavLink></button>
    </div>
  )
}

export default Error