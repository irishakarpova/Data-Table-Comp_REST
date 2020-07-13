import React from 'react'
import SelectedFilter from './select'
import './header.css'

export default () => {
  return(

    <div className='head-for-table col-md-12 d-flex flex-column flex-sm-row p-0'>
        <div className='select-form col-md-4 col-12 p-0'>
          <SelectedFilter/>
        </div>
        <div className='col-md-5 p-0 d-flex align-items-end'>
          <div className='head-srtipe'></div>
        </div>
        <div className='col-md-3 col-12 d-flex align-items-end p-0'>
          <h1>Parrots</h1>
        </div>
    </div>


  )
}
