import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../spinning/Spinner';

const ViewContact = () => {
  let{contactId}=useParams();
  let[state,setState]=useState({loading:false,contact:{},errorMessage:"error"})
  useEffect(()=>{
    let pro=new Promise((res,rej)=>{
      setState({...state,loading:true})
      let response=ContactService.getContact(contactId)
      res(response)
      rej("error")
    })
    pro.then((res)=>{
      console.log(res.data);
      setState({...state,loading:false,contact:res.data})

    }).catch(()=>{
      alert("error while fetching data !!")
      setState({...state,loading:false,errorMessage:"error"})
    })
  },[contactId])
  let{loading,contact,errorMeassage}=state
  return (
    <div>

      <React.Fragment>
  
        {
          loading?<Spinner/>:<React.Fragment>
            {
              Object.keys(contact).length>0 &&
              <>
              <section className='view-contact-intro p-3 '>
              <div className="container">
               <div className="row">
               <p className='text-warning h4 fw-bold '>View Contact</p>
               <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis consequuntur quos natus quam, adipisci laboriosam id ab placeat. Blanditiis molestias ratione libero, asperiores amet modi iusto nihil sint nesciunt ex.</p>
               </div>
              </div>
             </section>
             
             <section className='view-contact'>
               <div className="container">
                 <div className="row">
                   <div className="col-md-4">
                   <img src={contact.photo} className='contact-img' alt="" />
                   </div>
                 </div>
                   <div className="row mt-3">
                     <div className="col-md-8">
                   <ul className='list-group'>
                     <li className='list-group-item list-group-item-action'>Name : <span className='fw-bold'>{contact.name}</span></li>
                     <li className='list-group-item list-group-item-action'>Contact : <span className='fw-bold'>{contact.mobail}</span></li>
                     <li className='list-group-item list-group-item-action'>Email : <span className='fw-bold'>{contact.email}</span></li>
                     <li className='list-group-item list-group-item-action'>Title : <span className='fw-bold'>{contact.title}</span></li>
                     <li className='list-group-item list-group-item-action'>Company Name : <span className='fw-bold'>{contact.company}</span></li>
                     <li className='list-group-item list-group-item-action'>group : <span className='fw-bold'>{contact.group}</span></li>
                  </ul>
                  </div>
                   </div>
                   <div className="row">
                 <div className="col mt-2">
                 <Link to={'/contacts/list'} className='btn btn-danger ms-2 '>Back</Link>
                 </div>
               </div>
               </div>
              
             </section>
            
              </>
            }
             </React.Fragment>
            
          
        }

       
      </React.Fragment>
    </div>
  )
}

export default ViewContact
