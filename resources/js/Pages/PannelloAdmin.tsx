import React from 'react'
import useProps from '../Hooks/useProps'
import Layout from '../Components/Layout';

function PannelloAdmin() {
  const admin = useProps("admin") as { id: Int32List ,name: string , email: string };

  return (
    <Layout>
        <h1>Admin Panel</h1>
        <h1>ID: {admin.id}</h1>
        <h1>Welcome {admin.name}</h1>
        <h1>Email: {admin.email}</h1>
    </Layout>
  )
}

export default PannelloAdmin