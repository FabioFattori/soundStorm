import LoginForm from '../../Components/LoginForm'
import Layout from '../../Components/Layout'

function LoginAdmin() {
    return (
        <Layout>
            <h1>Login Admin</h1>
            <LoginForm admin={true} />
        </Layout>
    )
}

export default LoginAdmin