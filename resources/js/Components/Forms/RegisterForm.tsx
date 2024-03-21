import React from 'react'
import { useForm } from '@inertiajs/react';
import PasswordInputComponent from './PasswordInputComponent';
import bcrypt from "bcryptjs-react";
import {router} from '@inertiajs/react';
import useProps from '../../Hooks/useProps';
import Loader from './Loader';
import FeedBackHelper from './FeedBackHelper';
import { AlertColor } from '@mui/material';

function RegisterForm({admin = false}) {
  const error = useProps("error") as any ??null
  const [openDialog, setOpenDialog] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  const [severity, setSeverity] = React.useState('error');
  const [message, setMessage] = React.useState('default error');
    const [password_confirmation, setPassword_confirmation] = React.useState('');

    const {data, setData, errors, post} = useForm({
        'email': "",
        'name': "",
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
        if(password_confirmation == data.password){
            admin? post("/regAdmin",{
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
            }) : post("/regUser",{
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
            })
        }
        setData("password",password)
    }


  return (
    <>
      <Loader show={showLoader}/>
      <FeedBackHelper open={openDialog} severity={severity as AlertColor} message={message}/>
        <div className='center'>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Nome</label>
            <input type='email' className='form-control' value={data.name} onChange={(e)=>setData("name" , e.target.value)} id='name' aria-describedby='emailHelp' placeholder='Enter name' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' value={data.email} onChange={(e)=>setData("email",e.target.value)} id='email' aria-describedby='emailHelp' placeholder='Enter email' />
          </div>
          <PasswordInputComponent password={data.password} setPassword={(e:string)=>setData("password",e)} label="Password"/>
          <PasswordInputComponent setPassword={setPassword_confirmation} password={password_confirmation} label="Confirm Password"/>
          <button type='submit' onClick={(e)=>onsubmit(e)} className='btn btn-primary'>{admin ? 'Register as Admin' : 'Register'}</button>
          <button type='button' onClick={()=>admin ? router.get("/logAdmin") : router.get("/logUser")}>{admin ? 'Login as Admin' : 'Login'}</button>
        </form>
      </div>
    </>
    
  )
}

export default RegisterForm