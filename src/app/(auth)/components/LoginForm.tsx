'use client'
import usePasswordToggle from '@/hooks/usePasswordToggle'
import { cn } from '@/utils'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { inputType, showPassword, togglePasswordVisibility } = usePasswordToggle()
  const [error, setError] = useState('')
  const router = useRouter()

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

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
      router.push(callbackUrl)
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
          <label htmlFor="password" className="mb-2 block font-sora font-light text-clr-0f">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={inputType}
              className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 pr-10 font-light text-clr-0f"
              placeholder="Enter your password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            {/* Eye Icon */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-clr-0f"
            >
              {showPassword ? (
                <EyeIcon className="h-4 w-4 fill-clr-96" />
              ) : (
                <EyeSlashIcon className="h-4 w-4 fill-clr-96" />
              )}
            </button>
          </div>
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
