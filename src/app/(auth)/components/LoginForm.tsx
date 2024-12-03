'use client'
import { cn } from '@/utils'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('vendor@gmail.com')
  const [password, setPassword] = useState('Opedia@123')
  const [error, setError] = useState('')
  const router = useRouter()

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
    } else {
      router.push('/')
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
            onBlur={event => setEmail(event.target.value)}
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
            onBlur={event => setPassword(event.target.value)}
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
        <button
          className={cn(
            'flex items-center justify-center gap-2 rounded-md bg-clr-fb px-2 py-1 text-white lg:px-3 lg:py-2',
            error && 'mb-5'
          )}
          onClick={handleSubmit}
        >
          Sign In
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  )
}

export default LoginForm
