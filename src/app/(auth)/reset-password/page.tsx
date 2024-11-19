'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { EyeIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const ResetPassword = () => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false)
  const [newPasswordVisible, setNewPasswordVisible] = useState(false)

  const toggleOldPasswordVisibility = () => setOldPasswordVisible(!oldPasswordVisible)
  const toggleNewPasswordVisibility = () => setNewPasswordVisible(!newPasswordVisible)
  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-xl font-medium">Reset your password</p>
        <p className="text-sm text-[#A1A1A1]">Set your new password to continue</p>
      </div>
      <form>
        <ul className="mb-5 space-y-5">
          <li>
            <label htmlFor="oldPassword">
              <p className="mb-1 text-base text-clr-81">New password</p>
              <div className="relative">
                <input
                  id="oldPassword"
                  type={oldPasswordVisible ? 'text' : 'password'} // Toggle between password and text
                  className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
                  placeholder="Old password"
                  required
                />
                <EyeIcon
                  className="absolute right-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer"
                  onClick={toggleOldPasswordVisibility} // Toggle visibility on click
                />
              </div>
            </label>
          </li>

          <li>
            <label htmlFor="newPassword">
              <p className="mb-1 text-base text-clr-81">Confirm password</p>
              <div className="relative">
                <input
                  id="newPassword"
                  type={newPasswordVisible ? 'text' : 'password'}
                  className="w-full rounded-[10px] border border-[#0000001a] px-4 py-3 font-light text-clr-0f"
                  placeholder="New password"
                  required
                />
                <EyeIcon
                  className="absolute right-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer"
                  onClick={toggleNewPasswordVisibility}
                />
              </div>
            </label>
          </li>
        </ul>

        <DashboardButton name="Reset" type="submit" className="w-full" />
      </form>
    </div>
  )
}

export default ResetPassword
