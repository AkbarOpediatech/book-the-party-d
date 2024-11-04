import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import Link from 'next/link'

const RegisterForm = () => {
  return (
    <div>
      <p className="mb-5 text-xl font-medium">Let’s create an account</p>
      <form className="mb-5">
        <div className="mb-4">
          <label htmlFor="username" className="mb-2 block font-sora font-light text-clr-0f">
            User Name
          </label>
          <input
            type="text"
            name="username"
            className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
            placeholder="example@example.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-sora font-light text-clr-0f">
            Email Address
          </label>
          <input
            type="email"
            className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
            placeholder="example@example.com"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="mb-2 block font-sora font-light text-clr-0f">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
            placeholder="example@example.com"
          />
        </div>
        <DashboardButton name="Sign Up" type="submit" className="w-full" />
      </form>
    </div>
  )
}

export default RegisterForm
