import type { IUser } from '@/redux/features/user/apiSlice'
import { billingAddress, cn, personalInfo } from '@/utils'
import React, { useCallback, useState } from 'react'
import CustomBtn from '../../components/CustomBtn'
import Avatar from './Avatar'

type IProps = {
  data: IUser | undefined
}

const AccountSettings: React.FC<IProps> = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [personalData, setPersonalData] = useState(personalInfo)
  const [billingData, setBillingData] = useState(billingAddress)
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({})

  const validateFields = useCallback((data: typeof personalData) => {
    const newErrors: { [key: string]: string } = {}
    data.forEach(item => {
      if (item.value.trim() === '') {
        newErrors[item.label] = `Field "${item.label}" cannot be blank`
      }
    })
    return newErrors
  }, [])

  const handleEditClick = useCallback(() => {
    if (isEditing) {
      const allData = [...personalData, ...billingData]
      const newErrors = validateFields(allData)

      if (Object.keys(newErrors).length > 0) {
        setFieldErrors(newErrors)
        return
      }
      setFieldErrors({})
    }
    setIsEditing(prev => !prev)
  }, [isEditing, personalData, billingData, validateFields])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number, isPersonal: boolean) => {
      const { value } = e.target
      const updateData = (prevData: typeof personalData) => {
        const newData = [...prevData]
        newData[index].value = value
        return newData
      }

      if (isPersonal) {
        setPersonalData(updateData)
      } else {
        setBillingData(updateData)
      }

      if (value.trim() !== '') {
        setFieldErrors(prev => {
          const updated = { ...prev }
          delete updated[isPersonal ? personalData[index].label : billingData[index].label]
          return updated
        })
      }
    },
    [personalData, billingData]
  )

  const handleProfileInfoSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (isEditing) {
        const allData = [...personalData, ...billingData]
        const newErrors = validateFields(allData)

        if (Object.keys(newErrors).length > 0) {
          setFieldErrors(newErrors)
          return
        }
        setIsEditing(false)
      }
    },
    [isEditing, personalData, billingData, validateFields]
  )

  const renderInput = useCallback(
    (item: (typeof personalData)[0], index: number, isPersonal: boolean) => {
      if (item.label === 'Gender') {
        return (
          <select
            id={item.label}
            className="w-full rounded-xl border px-4 py-3 text-sm font-semibold text-clr-27 md:text-xl"
            value={item.value}
            onChange={e => handleChange(e, index, isPersonal)}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        )
      }

      return (
        <input
          id={item.label}
          type={item.label === 'Email' ? 'email' : 'text'}
          className="w-full rounded-xl border px-4 py-3 text-sm font-semibold text-clr-27 md:text-xl"
          value={item.value}
          onChange={e => handleChange(e, index, isPersonal)}
          required
        />
      )
    },
    [handleChange]
  )

  return (
    <>
      <form onSubmit={handleProfileInfoSubmit}>
        <Avatar onData={data} personalData={personalData} isEditing={isEditing} />

        <ul className={cn(isEditing && 'mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6')}>
          {isEditing &&
            personalData.map((item, index) => (
              <li key={item.label} className="col-span-1">
                <label htmlFor={item.label}>
                  <p className="mb-1 text-base text-clr-81 md:mb-4 md:text-xl">{item.label}</p>
                  {renderInput(item, index, true)}

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
            <li key={item.label} className="col-span-2 md:col-span-1">
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
