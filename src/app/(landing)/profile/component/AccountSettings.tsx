import { billingAddress, cn, personalInfo } from '@/utils'
import React, { useState } from 'react'
import CustomBtn from '../../components/CustomBtn'
import Avatar from './Avatar'

const AccountSettings = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [personalData, setPersonalData] = useState(personalInfo)
  const [billingData, setBillingData] = useState(billingAddress)
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({})

  const handleEditClick = () => {
    if (isEditing) {
      const newErrors: { [key: string]: string } = {}
      const allData = [...personalData, ...billingData]
      allData.forEach(item => {
        if (item.value.trim() === '') {
          newErrors[item.label] = `Field "${item.label}" cannot be blank`
        }
      })
      if (Object.keys(newErrors).length > 0) {
        setFieldErrors(newErrors)
        return
      }
      setFieldErrors({})
    }
    setIsEditing(prev => !prev)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    isPersonal: boolean
  ) => {
    const newData = isPersonal ? [...personalData] : [...billingData]
    newData[index].value = e.target.value
    if (e.target.value.trim() !== '') {
      setFieldErrors(prevErrors => {
        const updatedErrors = { ...prevErrors }
        delete updatedErrors[newData[index].label]
        return updatedErrors
      })
    }
    isPersonal ? setPersonalData(newData) : setBillingData(newData)
  }

  const handleProfileInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEditing) {
      const newErrors: { [key: string]: string } = {}
      const allData = [...personalData, ...billingData]
      allData.forEach(item => {
        if (item.value.trim() === '') {
          newErrors[item.label] = `Field "${item.label}" cannot be blank`
        }
      })
      if (Object.keys(newErrors).length > 0) {
        setFieldErrors(newErrors)
        return
      }
      setIsEditing(false)
    }
  }

  return (
    <>
      <form onSubmit={handleProfileInfoSubmit}>
        <Avatar personalData={personalData} isEditing={isEditing} />

        <ul className={cn(isEditing && 'mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6')}>
          {isEditing &&
            personalData.map((item, index) => (
              <li key={index} className="col-span-1">
                <label htmlFor={item.label}>
                  <p className="mb-1 text-base text-clr-81 md:mb-4 md:text-xl">{item.label}</p>

                  {item.label === 'Gender' ? (
                    <select
                      id={item.label}
                      className="w-full rounded-xl border px-4 py-3 text-sm font-semibold text-clr-27 md:text-xl"
                      value={item.value}
                      onChange={e => handleChange(e, index, true)}
                      required
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <input
                      id={item.label}
                      type={item.label === 'Email' ? 'email' : 'text'}
                      className="w-full rounded-xl border px-4 py-3 text-sm font-semibold text-clr-27 md:text-xl"
                      value={item.value}
                      onChange={e => handleChange(e, index, true)}
                      required
                    />
                  )}

                  {fieldErrors[item.label] && (
                    <p className="mt-2 text-sm text-red-500">{fieldErrors[item.label]}</p>
                  )}
                </label>
              </li>
            ))}
        </ul>

        <div className="mb-4">
          <h2 className="text-xl font-bold md:text-2xl">Billing Address</h2>
        </div>

        <ul className="mb-12 grid gap-4 md:grid-cols-2 md:gap-6">
          {billingData.map((item, index) => (
            <li key={index} className="col-span-2 md:col-span-1">
              <label htmlFor={item.label}>
                <p className="mb-2 text-base text-clr-81 md:mb-4 md:text-xl">{item.label}</p>
                {isEditing ? (
                  <input
                    id={item.label}
                    className="w-full rounded-xl border px-4 py-3 text-sm font-light text-clr-27 md:text-xl"
                    value={item.value}
                    onChange={e => handleChange(e, index, false)}
                    required
                  />
                ) : (
                  <p className="text-base font-semibold text-clr-27 md:text-xl">{item.value}</p>
                )}

                {fieldErrors[item.label] && (
                  <p className="mt-2 text-sm text-red-500">{fieldErrors[item.label]}</p>
                )}
              </label>
            </li>
          ))}
        </ul>

        <CustomBtn
          btnType={isEditing ? 'button' : 'submit'}
          btnName={isEditing ? 'Save Changes' : 'Edit Profile'}
          className="w-full"
          onClickFunc={handleEditClick}
        />
      </form>
    </>
  )
}

export default AccountSettings
