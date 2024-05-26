import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService'
import Spinner from '../../spinning/Spinner'

const ContactList = () => {
    let[state,setState]=useState({loading:false,contacts:[],errorMeassage:''})
    useEffect(()=>{
        let promise=new Promise((res,rej)=>{
            setState({...state,loading:true})
            let response=ContactService.getAllContacts()
            res(response)
            rej("erroe")
        })
        promise.then((res)=>{
           
            console.log(res.data);
            setState({...state,loading:false,contacts:res.data})
        }).catch(()=>{
            alert("error while fetching data!!!")
            setState({...state,loading:false,errorMeassage:"error message!!"})
        })
    },[])
    let{loading,contacts,errorMeassage}=state
  return (
    <>
        <pre>{JSON.stringify(contacts)}</pre>
        <section className='contact-search p-3'>
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <p className='h3'>Contact Manager <Link to={'/contacts/add'}><button className='btn btn-primary'><i className='fa fa-plus-circle me-2'/>New</button></Link></p>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam vel unde vitae laborum harum modi cupiditate rerum perferendis voluptates.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form action="" className='row'>
                                <div className='col mb-2'>
                                    <input type="text" placeholder='Search Names' className='form-control' />
                                </div>
                                <div className="col mb-2">
                                    <input type="submit" className='btn btn-outline-dark' value={"Search"} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
        {
        loading?<Spinner/>:<React.Fragment>
        <section className='contact-card'>
            <div className="container">
                <div className="row">
                     {
                        contacts.length>0 &&
                        contacts.map((contacts)=>{
                            return(
                                <div className="col-md-6" key={contacts.id}>
                        <div className="card my-2">
                            <div className="card-body">
                                <div className="row d-flex align-items-center  ">
                                    <div className="col-md-4">
                                        <img src={contacts.photo} className='contact-img' alt="" />
                                    </div>
                                    <div className="col-md-7">
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>Name : <span className='fw-bold'>{contacts.name}</span></li>
                                            <li className='list-group-item list-group-item-action'>Contact : <span className='fw-bold'>{contacts.mobail}</span></li>
                                            <li className='list-group-item list-group-item-action'>Email : <span className='fw-bold'>{contacts.email}</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 d-flex flex-column align-center p-1">
                                        <Link to={`/contact/view/${contacts.id}`} className='btn btn-warning my-1'><i className='fa fa-eye'/></Link>
                                        <Link to={'/contacts/edit/:contactId'} className='btn btn-primary '><i className='fa fa-edit'/></Link>
                                        <button  className='btn btn-danger my-1'><i className='fa fa-trash'/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                            )
                        })
                     }
                    
                </div>
            </div>

        </section>
            
            </React.Fragment>
            }
       
    </>
  )
}

export default ContactList
