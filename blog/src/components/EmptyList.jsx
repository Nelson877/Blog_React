import React from 'react'
import '../components/EmptyList.css'

const EmptyList = () => {
  return (
    <div className='emptylist'>
        <img className='emptylist__image' src='/assets/images/13525-empty.gif' alt="Loading..." />
    </div>
  )
}

export default EmptyList