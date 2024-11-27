'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('customer12@gmail.com')
  const [password, setPassword] = useState('Opedia@123')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (!result?.ok) {
      setError('Invalid email or password.')
    }
  }
  return (
    <>
      <p className="mb-5 text-xl font-medium">Welcome back</p>
      <form className="mb-5">
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
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="accent-clr-fb" />
            <label htmlFor="remember" className="font-light text-clr-0f">
              Remember Me
            </label>
          </div>

          <Link href="/forget-password" className="text-sm font-light text-clr-0f">
            Forgot Password?
          </Link>
        </div>
        <button onClick={handleSubmit}>Sign In</button>
        {/* <DashboardButton name="Sign In" type="submit" className="w-full" /> */}
      </form>
    </>
  )
}

export default LoginForm
