import React from 'react'
import { router } from '@inertiajs/react';

function LoginForm({admin=false}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  

  const onsubmit = (e:any) => {
    e.preventDefault();
    admin? router.get("/logAdmin", {email, password}) : router.get("/login", {email, password})
  }

  return (
    <>
      <div className='center'>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} id='email' aria-describedby='emailHelp' placeholder='Enter email' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
          </div>
          <button type='submit' onClick={(e)=>onsubmit(e)} className='btn btn-primary'>{admin ? 'Login as Admin' : 'Login'}</button>
        </form>
      </div>
    </>
  )
} 

export default LoginForm