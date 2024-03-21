import React from 'react'
import PasswordInputComponent from './PasswordInputComponent';
import bcrypt from "bcryptjs-react";
import { useForm } from '@inertiajs/react';
import {router} from '@inertiajs/react';
import FeedBackHelper from './FeedBackHelper';
import { AlertColor } from '@mui/material';
import useProps from '../Hooks/useProps';
import Loader from './Loader';

function LoginForm({admin=false}) {
  const error = useProps("error") as any ??null

  const [openDialog, setOpenDialog] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  const [severity, setSeverity] = React.useState('error');
  const [message, setMessage] = React.useState('default error');

  const {data, setData, get} = useForm({
    'email': "",
    'password': "",
  });

  React.useEffect(()=>{
    if(error != null){
      setSeverity("error")
      setMessage(error)
      setOpenDialog(true)
    }
  },[error])
  

  const onsubmit = (e:any) => {
    e.preventDefault();
    let password : string = data.password
    setData("password",bcrypt.hashSync(data.password, 10))
    admin? get("/loginAdmin",{
      preserveScroll: true,
      onStart:()=>{
        setShowLoader(true)
      },
      onFinish:()=>{
        setShowLoader(false)
      },
      onError:()=>{
        setSeverity("error")
        setMessage("Invalid Credentials")
        setOpenDialog(true)
      }
    }) : get("/loginUser",{
      preserveScroll: true,
      onStart:()=>{
        setShowLoader(true)
      },
      onFinish:()=>{
        setShowLoader(false)
      },
      onError:()=>{
        setSeverity("error")
        setMessage("Invalid Credentials")
        setOpenDialog(true)
        console.log("error")
    }})
    setData("password",password)
  }

  return (
    <>
      <Loader show={showLoader}/>
      <FeedBackHelper open={openDialog} message={message} severity={severity as AlertColor}/>
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