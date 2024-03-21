
import Layout from '../../Components/layout/Layout'
import RegisterForm from '../../Components/Forms/RegisterForm'

function AdminRegister() {
  return (
    <Layout>
        <h1>Admin Register</h1>
        <RegisterForm admin={true} />
    </Layout>
  )
}

export default AdminRegister