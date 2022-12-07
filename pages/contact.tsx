import React, { useState } from 'react'
import Navbar from './Navbar';

const Contact = () => {

    const [input, setInput] = useState({
        name: '',
        phone:'',
        email:'',
        add:'',
        msg:'',
    })

     function formSubmitHadler(e: any){
        e.preventDefault();
        alert(`FullName is ${input.name} and phone number is ${input.phone} and Email is ${input.email} save Address ${input.add} and last one is message ${input.msg}`)
     }
    const changeHandler=(e: any)=>{
       const {name, value}=  e.target;
       setInput((preVal)=>{
         return{
            ...preVal,
            [name]:value,
         }
       })
    }
    return (
        <>
        <Navbar/>
            <div className='container Contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
            <div className='my-5'>
                <h1>Contact Us</h1>
            </div>
              <form onSubmit={formSubmitHadler}>
                       <div className="mb-3">
                            <label className="form-label">Full Name</label >
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name here"name='name' value={input.name} onChange ={changeHandler}  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label >
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number"name='phone' value={input.phone} onChange ={changeHandler}  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label >
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" name='email' value={input.email} onChange ={changeHandler}  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label >
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address"name='add' value={input.add} onChange ={changeHandler}  />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Message</label>
                            <textarea  className="form-control" id="exampleFormControlTextarea1"name='msg' value={input.msg} onChange ={changeHandler}   ></textarea>
                        </div>
                        
                        <div className='col-12'>
                            <button className='btn btn-outline-primary ' type='submit'>Submit Form</button>
                        </div>
             </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;

