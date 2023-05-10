import React from 'react'
import './FilterMovie.css'
const FilterMovie = ({inputSearch , setInputSearch}) => {
  return (
    <div>
        <input className='input' type='text' placeholder='Title of movie...' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}/>
    </div>
  )
}

export default FilterMovie