'use client'
import { Switch } from '@headlessui/react'
import { EyeIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import CustomBtn from '../../components/CustomBtn'

const GeneralSettings = () => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false)
  const [newPasswordVisible, setNewPasswordVisible] = useState(false)

  const toggleOldPasswordVisibility = () => setOldPasswordVisible(!oldPasswordVisible)
  const toggleNewPasswordVisibility = () => setNewPasswordVisible(!newPasswordVisible)

  const [emailEnabled, setEmailEnabled] = useState(false)
  const [smsEnabled, setSmsEnabled] = useState(false)

  return (
    <div>
      <div className="mb-12 rounded-2xl border border-slate-200 p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold md:text-2xl">Change Password</h2>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <li className="col-span-1 md:col-span-1">
            <label htmlFor="oldPassword">
              <p className="mb-1 text-base text-clr-81 md:mb-4 md:text-xl">Old password</p>
              <div className="relative">
                <input
                  id="oldPassword"
                  type={oldPasswordVisible ? 'text' : 'password'} // Toggle between password and text
                  className="w-full rounded-xl border px-4 py-3 text-sm font-light text-clr-27 md:text-xl"
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

          <li className="col-span-1 md:col-span-1">
            <label htmlFor="newPassword">
              <p className="mb-1 text-base text-clr-81 md:mb-4 md:text-xl">New password</p>
              <div className="relative">
                <input
                  id="newPassword"
                  type={newPasswordVisible ? 'text' : 'password'}
                  className="w-full rounded-xl border px-4 py-3 text-sm font-light text-clr-27 md:text-xl"
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

          <div className="col-span-1 md:col-span-2">
            <CustomBtn className="w-full text-base font-bold" btnName="Update" />
          </div>
        </ul>
      </div>

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
