import React from 'react'

function PasswordInputComponent({setPassword = (e:any)=>{console.log(e.target.value)},password="",label = "Password"}) {

    const [isVisibile, setIsVisible] = React.useState(false);

  return (
    <div className='form-group'>
            <label htmlFor='password'>{label}</label>
            <input type={isVisibile?"text":"password"} className='form-control' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder={label} />
            <button type="button" onClick={()=>setIsVisible(!isVisibile)}>{isVisibile?"Hide":"Show"}</button>
    </div>
  )
}

export default PasswordInputComponent