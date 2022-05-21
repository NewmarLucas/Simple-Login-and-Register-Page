import React from 'react'

import './styles.css'

export const EmptyPage = ({ message }) => {
  return (
    <div className='container'>
      <div className='content'>
        <h1 style={{ color: '#888' }}>{message}</h1>
      </div>
    </div>
  )
}
