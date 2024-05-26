import React from 'react'
import spinnerImg from '../../components/asset/img/load-8510_256.gif'

const Spinner = () => {
  return (
    <div>
      <React.Fragment>
        <img src={spinnerImg} alt="" className='d-flex align-items-text-center m-auto mt-5  ' style={{height:"200px", width:"200px"}} />
      </React.Fragment>
    </div>
  )
}

export default Spinner
