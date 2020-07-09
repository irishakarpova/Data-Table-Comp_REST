import React from 'react'
import SelectedFilter from './select'
import './header.css'

export default () => {
  return(
    <div className='head-for-table col-md-12 d-flex align-items-end p-0'>
      <div className='col-md-9 col-xs-8 col-7 p-0'>
        <div className='select-form'>
          <SelectedFilter/>
        </div>
        <div className='head-srtipe'></div>
      </div>
      <h1>Parrots</h1>
    </div>
  )
}
