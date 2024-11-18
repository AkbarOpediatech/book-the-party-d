import { billingAddress, personalInfo } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import CustomBtn from '../../components/CustomBtn'
import Avatar from '/public/assets/avatar.jpeg'

const AccountSettings = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [personalData, setPersonalData] = useState(personalInfo)
  const [billingData, setBillingData] = useState(billingAddress)

  const handleEditClick = () => {
    setIsEditing(prev => !prev)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    isPersonal: boolean
  ) => {
    const newData = isPersonal ? [...personalData] : [...billingData]
    newData[index].value = e.target.value
    isPersonal ? setPersonalData(newData) : setBillingData(newData)
  }

  const handleProfileInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault()

  return (
    <>
      <div className="mb-12 flex items-center gap-6">
        <div className="h-[200px] w-[200px] overflow-hidden rounded-full">
          <Image width={200} height={200} src={Avatar} alt="avatar" />
        </div>
        <div className="identity">
          <h4 className="mb-4 text-[42px] font-bold text-clr-27">Albert</h4>
          <p className="text-[32px] text-clr-81">albert@gmail.com</p>
        </div>
      </div>
      <form onSubmit={handleProfileInfoSubmit}>
        <ul className="mb-10 grid grid-cols-2 gap-6">
          {personalData.map((item, index) => (
            <li key={index} className="col-span-1">
              <label htmlFor={item.value}>
                <p className="mb-4 text-xl text-clr-81">{item.label}</p>
                {isEditing ? (
                  item.label === 'Phone Number' ? (
                    <input
                      id={item.value}
                      className="w-full rounded-xl border px-4 py-3 text-xl font-semibold text-clr-27"
                      value={item.value}
                      onChange={e => handleChange(e, index, true)}
                    />
                  ) : (
                    <select
                      id={item.value}
                      className="w-full rounded-xl border px-4 py-3 text-xl font-semibold text-clr-27"
                      value={item.value}
                      onChange={e => handleChange(e, index, true)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  )
                ) : (
                  <p className="text-xl font-semibold text-clr-27">{item.value}</p>
                )}
              </label>
            </li>
          ))}
        </ul>

        <div className="mb-4">
          <h2 className="text-2xl font-bold">Billing Address</h2>
        </div>

        <ul className="mb-12 grid grid-cols-2 gap-6">
          {billingData.map((item, index) => (
            <li key={index} className="col-span-1">
              <label htmlFor={item.value}>
                <p className="mb-4 text-xl text-clr-81">{item.label}</p>
                {isEditing ? (
                  <input
                    id={item.value}
                    className="w-full rounded-xl border px-4 py-3 text-xl font-semibold text-clr-27"
                    value={item.value}
                    onChange={e => handleChange(e, index, false)}
                  />
                ) : (
                  <p className="text-xl font-semibold text-clr-27">{item.value}</p>
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
