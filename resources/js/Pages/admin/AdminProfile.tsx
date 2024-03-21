
import Layout from '../../Components/Layout'
import useProps from '../../Hooks/useProps'
import { router } from '@inertiajs/react';

function AdminProfile() {
    const admin = useProps("admin") as { id: Int32List ,name: string , email: string } ;
  return (
    <Layout>
        <h1>Admin Profile</h1>
        <p>Nome: {admin.name}</p>
        <p>Email: {admin.email}</p>
        <button onClick={()=>{router.get("/logOut")}}>Logout</button>

    </Layout>
  )
}

export default AdminProfile