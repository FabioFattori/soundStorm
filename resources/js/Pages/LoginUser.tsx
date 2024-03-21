import React from 'react'
import Layout from '../Components/Layout'
import LoginForm from '../Components/LoginForm'

function LoginUser() {
  return (
    <Layout>
        <h1>Login User</h1>
        <LoginForm admin={false} />
    </Layout>
  )
}

export default LoginUser