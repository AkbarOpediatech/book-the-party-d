'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { useRouter } from 'next/navigation'

const ForgetPassword = () => {
  const router = useRouter()

  const handleForgetPassword = (e: any) => {
    e.preventDefault()
    router.push('/reset-password')
  }

  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-xl font-medium">Password Recovery</p>
        <p className="text-sm text-[#A1A1A1]">
          You forget your password? Enter your email address to reset password
        </p>
      </div>
      <form className="mb-5" onSubmit={handleForgetPassword}>
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

        <DashboardButton name="Continue" type="submit" className="w-full" />
      </form>
    </div>
  )
}

export default ForgetPassword
