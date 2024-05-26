import React from 'react'
import { Link } from 'react-router-dom'

const AddContact = () => {
  return (
    <div>
      <React.Fragment>
        <section className='add-contact'>
          <div className="container p-3">
            <div className="row">
              <p className='text-success h4 fw-bold '>Create Contact</p>
              <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis consequuntur quos natus quam, adipisci laboriosam id ab placeat. Blanditiis molestias ratione libero, asperiores amet modi iusto nihil sint nesciunt ex.</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form action="">
                  <div className="mb-2">
                    <input type="text" placeholder='Name' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Photo url' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="number" placeholder='Mobile' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="email" placeholder='Email' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Company Name' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Title' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <select name="" id="" className='form-control'>
                      <option value="">Select A Group</option>
                      <option value="">Home</option>
                      <option value="">Work</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <button className='btn btn-success '>Create New Contact</button>
                    <Link to={'/contacts/list'} className='btn btn-danger ms-2 '>Cancel</Link>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  )
}

export default AddContact
