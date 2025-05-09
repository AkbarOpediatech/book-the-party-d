'use client'
import { useResetPasswordMutation } from '@/redux/features/user/apiSlice'
import { Switch } from '@headlessui/react'
import { EyeIcon } from '@heroicons/react/16/solid'
import { signOut } from 'next-auth/react'
import { useState } from 'react' // Adjust the import path for your RTK Query API
import CustomBtn from '../../components/CustomBtn'

const GeneralSettings = () => {
  const [emailEnabled, setEmailEnabled] = useState(false)
  const [smsEnabled, setSmsEnabled] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    new_password: false,
    confirm_new_password: false
  })

  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const [passwords, setPasswords] = useState({
    password: '',
    new_password: '',
    confirm_new_password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswords(prev => ({ ...prev, [name]: value }))
    setErrorMessage('')
    setSuccessMessage('')
  }

  const [resetPassword, { isLoading, isError }] = useResetPasswordMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (passwords.new_password !== passwords.confirm_new_password) {
      setErrorMessage('New password and confirm password do not match!')
      return
    }

    try {
      await resetPassword({ bodyData: passwords }).unwrap()
      setSuccessMessage('Password updated successfully!')
      setTimeout(() => {
        signOut({ callbackUrl: '/login' })
      }, 1000)
    } catch (err) {
      setErrorMessage('Failed to update password. Please try again.')
      console.error('Reset Password Error:', err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-12 rounded-2xl border border-slate-200 p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold md:text-2xl">Change Password</h2>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { id: 'password', label: 'Old Password' },
            { id: 'new_password', label: 'New Password' },
            { id: 'confirm_new_password', label: 'Confirm Password' }
          ].map(({ id, label }) => (
            <li key={id} className="col-span-1 md:col-span-1">
              <label htmlFor={id}>
                <p className="mb-1 text-base text-clr-81 md:mb-4 md:text-xl">{label}</p>
                <div className="relative">
                  <input
                    id={id}
                    name={id}
                    type={passwordVisibility[id as keyof typeof passwordVisibility] ? 'text' : 'password'}
                    className="w-full rounded-xl border px-4 py-3 text-sm font-light text-clr-27 md:text-xl"
                    placeholder={label}
                    value={passwords[id as keyof typeof passwords]}
                    onChange={handleChange}
                    required
                  />
                  <EyeIcon
                    className="absolute right-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer"
                    onClick={() => togglePasswordVisibility(id as keyof typeof passwordVisibility)}
                  />
                </div>
              </label>
            </li>
          ))}

          <li className="col-span-1 md:col-span-2">
            {errorMessage && <p className="mb-4 text-sm font-medium text-red-600">{errorMessage}</p>}
            {successMessage && <p className="mb-4 text-sm font-medium text-green-600">{successMessage}</p>}
            {isError && (
              <p className="mb-4 text-sm font-medium text-red-600">{isError || 'An error occurred.'}</p>
            )}
            <CustomBtn
              className="w-full text-base font-bold"
              btnName={isLoading ? 'Updating...' : 'Update'}
              btnType="submit"
              disabled={isLoading}
            />
          </li>
        </ul>
      </form>

      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Notification Preferences</h2>
        </div>

        <ul className="space-y-6">
          <li className="flex items-center justify-between">
            <p className="text-xl font-medium text-clr-27">Email Notification</p>
            <Switch
              checked={emailEnabled}
              onChange={setEmailEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-clr-fb"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </li>

          <li className="flex items-center justify-between">
            <p className="text-xl font-medium text-clr-27">SMS Notification</p>
            <Switch
              checked={smsEnabled}
              onChange={setSmsEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-clr-fb"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GeneralSettings
