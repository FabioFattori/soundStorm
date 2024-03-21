import RegisterForm from '../../Components/Forms/RegisterForm'
import Layout from '../../Components/layout/Layout'

function UserRegister() {
  return (
    <Layout>
      <h1>User Register</h1>
      <RegisterForm admin={false} />
    </Layout>
  )
}

export default UserRegister