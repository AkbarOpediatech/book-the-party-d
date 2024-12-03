import Link from 'next/link'
import FormPage from '../components/FormPage'

const Register = () => {
  return (
    <>
      TODO:" need to change this api to redux"
      <FormPage />
      <div className="flex items-center gap-1 text-sm font-medium">
        <p className="text-gray-900"> Already have an account?</p>
        <Link href="/login" className="text-clr-fb">
          Login here
        </Link>
      </div>
    </>
  )
}

export default Register
