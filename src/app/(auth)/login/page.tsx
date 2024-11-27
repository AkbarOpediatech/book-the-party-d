import Link from 'next/link'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <>
      <LoginForm />
      <div className="flex items-center gap-1 text-sm font-medium">
        <p className="text-gray-900"> Don’t have an account yet?</p>
        <Link href="/register" className="text-clr-fb">
          Sign up
        </Link>
      </div>
    </>
  )
}

export default Login
