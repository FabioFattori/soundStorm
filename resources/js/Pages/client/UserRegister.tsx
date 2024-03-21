import RegisterForm from '../../Components/RegisterForm'
import Layout from '../../Components/Layout'

function UserRegister() {
  return (
    <Layout>
      <h1>User Register</h1>
      <RegisterForm admin={false} />
    </Layout>
  )
}

export default UserRegister