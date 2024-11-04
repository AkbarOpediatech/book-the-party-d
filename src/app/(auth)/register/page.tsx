import Link from 'next/link'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="max-h-[90vh] w-full max-w-[720px] rounded-lg bg-clr-f8 p-5 lg:px-[104px] lg:py-[127px]">
        <RegisterForm />
        <div className="flex items-center gap-1 text-sm font-medium">
          <p className="text-gray-900"> Already have an account?</p>
          <Link href="/login" className="text-clr-fb">
            Login here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
