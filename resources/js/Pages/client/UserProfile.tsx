
import useProps from '../../Hooks/useProps';
import Layout from '../../Components/layout/Layout';
import { router } from '@inertiajs/react';

function UserProfile() {
    const user = useProps("user") as { id: Int32List ,name: string , email: string } ;

    

  return (
    <Layout>
        <h1>User Profile</h1>
        <p>Nome: {user?.name}</p>
        <button onClick={()=>{router.get("/logOut")}}>Logout</button>
    </Layout>
  )
}

export default UserProfile