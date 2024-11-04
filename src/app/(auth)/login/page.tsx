import Link from 'next/link'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="max-h-[90vh] w-full max-w-[720px] rounded-lg bg-clr-f8 p-5 lg:px-[104px] lg:py-[127px]">
        <LoginForm />
        <div className="flex items-center gap-1 text-sm font-medium">
          <p className="text-gray-900"> Don’t have an account yet?</p>
          <Link href="/register" className="text-clr-fb">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
