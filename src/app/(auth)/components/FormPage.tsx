'use client'
import { setError, setLoading } from '@/redux/features/loadingErrorSlice'
import type { AppDispatch, RootState } from '@/redux/store'
import { passwordRequirements, SignUpInitialState, type ISignUpFormData } from '@/utils'
import { showAlert } from '@/utils/alertService'
import { xInputType, xRole, xShowAlert } from '@/utils/enum'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputField from './InputField'

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState<ISignUpFormData>(SignUpInitialState)
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.loadingerror)
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
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
    } catch (error: any) {
      dispatch(setError(error.response?.data?.message || 'Registration failed'))
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
      <p className="mb-5 text-xl font-medium">Let’s create an account</p>
      <form onSubmit={handleSubmit} className="mb-5">
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

        <div className="mb-4">
          <InputField
            LabelHtmlFor="password"
            LabelName="Password"
            InputId="password"
            InputType={xInputType.Password}
            InputOnChange={handleChange}
            InputName="password"
            InputValue={formData.password}
            InputPlaceHolder="Password"
          />
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
