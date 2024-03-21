
import Layout from '../../Components/layout/Layout'
import LoginForm from '../../Components/Forms/LoginForm'

function LoginUser() {
  return (
    <Layout>
        <h1>Login User</h1>
        <LoginForm admin={false} />
    </Layout>
  )
}

export default LoginUser