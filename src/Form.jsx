import React, { useState } from 'react'

const Form = () => {
const init={
    name:"",
    password:""
}
    const[data,setData]=useState(init)
    const handelsubmit=(e)=>{
      e.preventDefault()
      validate(data);
    }
    const validate=(data)=>{
      const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
      if (!validPassword.test(data.password)) {
        alert("set valid password")
     }else{
       alert("loged in succesfully")
     }
    }

  return (
    <div className='App'>
        Please login
        <form onSubmit={(e)=>{handelsubmit(e)}}>
        <div>
            
        <input type='email' placeholder='UserName' onChange={(e)=>{setData({...data,name:e.target.value})}}/>
        </div>
        <div>
        <input  type='password' placeholder='Password' onChange={(e)=>{setData({...data,password:e.target.value})}} />
        </div>
        <div>
        <button type='submit' >Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Form