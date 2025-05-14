'use client'
import usePasswordToggle from '@/hooks/usePasswordToggle'
import { setError, setLoading } from '@/redux/features/loadingErrorSlice'
import type { AppDispatch, RootState } from '@/redux/store'
import {
  passwordRequirements,
  SignUpInitialState,
  xInputType,
  xRole,
  xShowAlert,
  type ErrorResponse,
  type ISignUpFormData
} from '@/utils'
import { showAlert } from '@/utils/alertService'
import { passwordRegex } from '@/utils/regex'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import axios, { type AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputField from './InputField'

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState<ISignUpFormData>(SignUpInitialState)
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.loadingerror)
  const { inputType, showPassword, togglePasswordVisibility } = usePasswordToggle()
  const router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setLoading(true))
    dispatch(setError(null))

    if (!passwordRegex.test(formData.password)) {
      dispatch(setError('Password does not meet the required criteria'))
      dispatch(setLoading(false))
      return
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_LIVE_API}/auth/registration`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      showAlert('Registration successful, Login please', '', xShowAlert.Success)
      setFormData(SignUpInitialState)
      router.push('/login')
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      dispatch(setError(axiosError.response?.data?.message || 'Registration failed'))
    } finally {
      dispatch(setLoading(false))
    }
  }
  const checkRequirement = (regex: RegExp) => regex.test(formData.password)
  const roleOptions = Object.values(xRole).map(role => ({
    value: role,
    label: role.charAt(0).toUpperCase() + role.slice(1)
  }))
  useEffect(() => {
    if (error) {
      showAlert(error)
    }
  }, [error])

  return (
    <>
      <p className="mb-5 text-xl font-medium">Let&apos;s create an account</p>
      <form className="mb-5">
        <div className="mb-4">
          <InputField
            LabelName="User Name"
            LabelHtmlFor="name"
            InputId="name"
            InputName="name"
            InputValue={formData.name}
            InputOnChange={handleChange}
            InputPlaceHolder="User Name"
            InputType={xInputType.Text}
          />
        </div>

        <div className="mb-4">
          <InputField
            LabelHtmlFor="email"
            LabelName="Email Address"
            InputId="email"
            InputType={xInputType.Email}
            InputName="email"
            InputOnChange={handleChange}
            InputValue={formData.email}
            InputPlaceHolder="example@example.com"
          />
        </div>

        <div className="relative mb-4">
          <InputField
            LabelHtmlFor="password"
            LabelName="Password"
            InputId="password"
            InputType={inputType} // Dynamically set InputType
            InputOnChange={handleChange}
            InputName="password"
            InputValue={formData.password}
            InputPlaceHolder="Password"
          />
          {/* Eye Icon for toggling visibility */}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-[70%] -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeIcon className="h-4 w-4" /> : <EyeSlashIcon className="h-4 w-4" />}
          </button>
        </div>

        <ul className="mb-4">
          {passwordRequirements.map((requirement, index) => (
            <li
              key={index}
              className={`text-sm ${checkRequirement(requirement.regex) ? 'text-green-500' : 'text-red-500'}`}
            >
              {checkRequirement(requirement.regex) ? '✔' : '✘'} {requirement.label}
            </li>
          ))}
        </ul>

        <div className="mb-4">
          <InputField
            LabelHtmlFor="role"
            LabelName="Role"
            isSelect={true}
            InputId="role"
            InputName="role"
            selectValue={formData.role}
            InputOnChange={handleChange}
            selectOptions={roleOptions}
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-clr-fb px-2 py-1 text-white lg:px-3 lg:py-2"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        {error && <p className="mt-3 text-red-500">{error}</p>}
      </form>
    </>
  )
}

export default FormPage
