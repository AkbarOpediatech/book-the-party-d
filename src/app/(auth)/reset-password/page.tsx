'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { useResetPasswordMutation } from '@/redux/features/user/apiSlice'
import { cn } from '@/utils'
import { EyeSlashIcon } from '@heroicons/react/16/solid'
import { EyeIcon } from '@heroicons/react/24/solid'
import { signOut } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import Swal from 'sweetalert2'

const passwordRequirements = [
  { regex: /.{8,}/, label: 'At least 8 characters' },
  { regex: /[A-Z]/, label: 'At least one uppercase letter' },
  { regex: /[a-z]/, label: 'At least one lowercase letter' },
  { regex: /\d/, label: 'At least one number' },
  { regex: /[@$!%*?&#]/, label: 'At least one special character' }
]

const ResetPasswordContent = () => {
  const [passwordVisible, setPasswordVisible] = useState({
    new_password: false,
    confirm_new_password: false
  })

  const togglePasswordVisibility = (field: 'new_password' | 'confirm_new_password') => {
    setPasswordVisible(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }

  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [passwords, setPasswords] = useState({
    token: token,
    new_password: '',
    confirm_new_password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [resetPassword, { isLoading }] = useResetPasswordMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (passwords.new_password !== passwords.confirm_new_password) {
      Swal.fire({
        title: 'Error',
        text: 'New password and confirm password do not match!',
        icon: 'error',
        confirmButtonText: 'Retry'
      })
      return
    }

    try {
      await resetPassword({ bodyData: passwords }).unwrap()
      Swal.fire({
        title: 'Success',
        text: 'Your password has been updated successfully!',
        icon: 'success'
      })
      setTimeout(() => {
        signOut({ callbackUrl: '/login' })
      }, 3000)
    } catch (err) {
      Swal.fire({
        title: 'Failed',
        text: 'Failed to update password. Please try again.',
        icon: 'error',
        confirmButtonText: 'Retry'
      })
    }
  }

  const checkRequirement = (regex: RegExp) => regex.test(passwords.new_password)

  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-xl font-medium">Reset your password</p>
        <p className="text-sm text-[#A1A1A1]">Set your new password to continue</p>
      </div>
      <form onSubmit={handleSubmit}>
        <ul className="mb-5 space-y-5">
          <li>
            <label htmlFor="new_password">
              <p className="mb-1 text-base text-clr-81">New password</p>
              <div className="relative">
                <input
                  id="new_password"
                  name="new_password"
                  value={passwords.new_password}
                  onChange={handleChange}
                  type={passwordVisible.new_password ? 'text' : 'password'}
                  className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
                  placeholder="New password"
                  required
                />
                {passwordVisible.new_password ? (
                  <EyeIcon
                    className="absolute right-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer"
                    onClick={() => togglePasswordVisibility('new_password')}
                  />
                ) : (
                  <EyeSlashIcon
                    className="absolute right-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer"
                    onClick={() => togglePasswordVisibility('new_password')}
                  />
                )}
              </div>
            </label>
          </li>

          <li>
            <label htmlFor="confirm_new_password">
              <p className="mb-1 text-base text-clr-81">Confirm password</p>
              <div className="relative">
                <input
                  id="confirm_new_password"
                  name="confirm_new_password"
                  value={passwords.confirm_new_password}
                  onChange={handleChange}
                  type={passwordVisible.confirm_new_password ? 'text' : 'password'}
                  className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
                  placeholder="Confirm new password"
                  required
                />

                {passwordVisible.confirm_new_password ? (
                  <EyeIcon
                    className="absolute right-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer"
                    onClick={() => togglePasswordVisibility('confirm_new_password')}
                  />
                ) : (
                  <EyeSlashIcon
                    className="absolute right-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer"
                    onClick={() => togglePasswordVisibility('confirm_new_password')}
                  />
                )}
              </div>
            </label>
          </li>
        </ul>

        <ul className="mb-4 space-y-2">
          {passwordRequirements.map((requirement, index) => (
            <li
              key={index}
              className={`text-sm ${checkRequirement(requirement.regex) ? 'text-green-500' : 'text-red-500'}`}
            >
              {checkRequirement(requirement.regex) ? '✔' : '✘'} {requirement.label}
            </li>
          ))}
        </ul>

        <DashboardButton
          name={isLoading ? 'Updating...' : 'Reset'}
          type="submit"
          className={cn('w-full', isLoading && 'cursor-not-allowed')}
          disabled={isLoading}
        />
      </form>
    </div>
  )
}

const ResetPassword = () => {
  return (
    <Suspense fallback="Loading...">
      <ResetPasswordContent />
    </Suspense>
  )
}

export default ResetPassword
