import React from 'react'
import Layout from '../Components/Layout'
import RegisterForm from '../Components/RegisterForm'

function AdminRegister() {
  return (
    <Layout>
        <h1>Admin Register</h1>
        <RegisterForm admin={true} />
    </Layout>
  )
}

export default AdminRegister