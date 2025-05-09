'use client'

import CustomBtn from '@/app/(landing)/components/CustomBtn'
import { useForgotPasswordMutation } from '@/redux/features/user/apiSlice'
import { cn } from '@/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import ResetPassword from '../reset-password/page'

const ForgetPasswordContent = () => {
  const [email, setEmail] = useState('')
  const [forgotPassword, { isLoading, isError }] = useForgotPasswordMutation()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const router = useRouter()
  const [message, setMessage] = useState('')

  const handleForgetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await forgotPassword({ bodyData: { email } }).unwrap()
      setMessage('Please check your inbox for the password recovery email.')
      setTimeout(() => {
        router.push('/')
      }, 5000)
    } catch (err) {
      console.error('Error sending password recovery email:', err)
    }
  }

  if (token) {
    return <ResetPassword />
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
        {message ? (
          <p className="mb-8 text-2xl font-bold text-clr-fb">{message}</p>
        ) : (
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block font-sora font-light text-clr-0f">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
              placeholder="example@example.com"
              required
            />
          </div>
        )}

        {!message && (
          <CustomBtn
            className={cn('w-full text-base font-bold', isLoading && 'cursor-not-allowed')}
            btnName={isLoading ? 'Sending...' : 'Continue'}
            btnType="submit"
            disabled={isLoading}
          />
        )}
      </form>
      {isError && <p className="text-red-500">Error: {isError || 'Something went wrong'}</p>}
    </div>
  )
}

const ForgetPassword = () => {
  return (
    <Suspense fallback="Loading...">
      <ForgetPasswordContent />
    </Suspense>
  )
}

export default ForgetPassword
