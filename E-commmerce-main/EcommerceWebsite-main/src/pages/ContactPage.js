import React from "react";
import { Footer, Navbar } from "../components";
import axios from "axios";
import { useState } from "react";

const ContactPage = () => {
  const [formdata , setFormdata] = useState({
    'FullName' : '',
    'EmailAddress' : '',
    'Password' : '',
    })
//console.log(formdata)
const handelSumbit = (e) =>{
    e.preventDefault();
    console.log(formdata)
    axios.post('http://localhost:8888/addcontact1',{formdata}).then((res)=>console.log(res.data))
    .then((result) =>{
        alert("Thank you for your message")
    })
}
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handelSumbit}>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  onChange={(e)=>setFormdata({...formdata,Name:e.target.value})}
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  onChange={(e)=>setFormdata({...formdata,Email:e.target.value})}
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                  onChange={(e)=>setFormdata({...formdata,Message:e.target.value})}
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default ContactPage;
