import React from 'react'
import PasswordInputComponent from './PasswordInputComponent';
import bcrypt from "bcryptjs-react";
import { useForm } from '@inertiajs/react';
import {router} from '@inertiajs/react';
function LoginForm({admin=false}) {

  const {data, setData, get} = useForm({
    'email': "",
    'password': "",
  });

  

  const onsubmit = (e:any) => {
    e.preventDefault();
    let password : string = data.password
    setData("password",bcrypt.hashSync(data.password, 10))
    admin? get("/loginAdmin") : get("/loginUser")
    setData("password",password)
  }

  return (
    <>
      <div className='center'>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' value={data.email} onChange={(e)=>setData("email",e.target.value)} id='email' aria-describedby='emailHelp' placeholder='Enter email' />
          </div>
          <PasswordInputComponent setPassword={(txt)=>setData("password",txt)} password={data.password} label="Password"/>
          <button type='submit' onClick={(e)=>onsubmit(e)} className='btn btn-primary'>{admin ? 'Login as Admin' : 'Login'}</button>
          <button type='button' onClick={()=>router.get(admin ? "/registerAdmin" : "/registerUser")}>{admin ? 'Register as Admin' : 'Register'}</button>
        </form>
      </div>
    </>
  )
} 

export default LoginForm