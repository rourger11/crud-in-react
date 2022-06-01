import React from 'react'

export default function Contact() {


  const contact=e=>{
    e.preventDefault();
  }
  return (
    <div className='userform'>
    <form>
    <h1 className='head'>Contact Us</h1>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter your Name " />
    </div>
    <div class="form-group">
      <input type="text" class="form-control"  placeholder="Enter your Message"/>
    </div>
    
    <div class="form-group">
      <input type="text" class="form-control"    placeholder="Enter your email" />
      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <button type="submit" id='userbutton' className="btn btn-warning" onClick={e=>contact(e)}>Contact</button>
  </form></div>
  )
}
