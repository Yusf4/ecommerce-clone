import { useState } from "react";
const Payment=({user,})=>{
const [fullName,setFullName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [city,setCity]=useState('');
const [state,setState]=useState('');
const [card,setCard]=useState('');
return (
    <div>
        <form
        onSubmit={enroll}>
          <label htmlFor="fullName">
      
          </label>
          <label htmlFor="email">
           <input  name="email"/>
          </label>
          <label htmlFor="phone number">
          <input  name="phone"/>
          </label>
          <label htmlFor="city">
          <input  name="city"/>
          </label>
          <label htmlFor="state">
          <input  name="state"/>
          </label>
          <label htmlFor="cardNumber">
          <input  name="card"/>
          </label>
        </form>
    </div>
)
}