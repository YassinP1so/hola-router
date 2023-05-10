import React from 'react'
import Form from 'react-bootstrap/Form'

const FilterRate = ({setRateSearch , rateSearch}) => {

  
  return (
    <div>
        <input type='text' placeholder='Rate of movie...' className='input' onChange={(e) => setRateSearch(e.target.value)} value={rateSearch}/>

    </div>
  )
}

export default FilterRate