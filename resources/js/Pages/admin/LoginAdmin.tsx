import LoginForm from '../../Components/Forms/LoginForm'
import Layout from '../../Components/layout/Layout'

function LoginAdmin() {
    return (
        <Layout>
            <h1>Login Admin</h1>
            <LoginForm admin={true} />
        </Layout>
    )
}

export default LoginAdmin