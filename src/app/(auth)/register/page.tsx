import Link from 'next/link'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    // <div className="flex h-screen items-center justify-center p-4">
    <>
      <RegisterForm />
      <div className="flex items-center gap-1 text-sm font-medium">
        <p className="text-gray-900"> Already have an account?</p>
        <Link href="/login" className="text-clr-fb">
          Login here
        </Link>
      </div>
    </>
    // </div>
  )
}

export default Register
