import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
  return (
    <div>
         <React.Fragment>
        <section className='add-contact'>
          <div className="container p-3">
            <div className="row">
              <p className='text-primary  h4 fw-bold '>Edit Contact</p>
              <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis consequuntur quos natus quam, adipisci laboriosam id ab placeat. Blanditiis molestias ratione libero, asperiores amet modi iusto nihil sint nesciunt ex.</p>
            </div>
            <div className="row d-flex align-items-center ">
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
                    <button className='btn btn-primary  '>Update Contact</button>
                    <Link to={'/contacts/list'} className='btn btn-danger ms-2 '>Cancel</Link>
                  </div>
                 
                </form>
              </div>
              <div className="col-md-8">
              <img src="data:image/png;base64,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" className='contact-img' alt="" />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  )
}

export default EditContact
