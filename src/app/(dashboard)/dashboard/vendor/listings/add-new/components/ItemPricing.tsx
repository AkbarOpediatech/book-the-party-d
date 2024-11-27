'use client'
import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import FormInput from '@/app/(dashboard)/components/FormInput'
import GrayBtn from '@/app/(dashboard)/components/GrayBtn'
import { useAddServiceMutation, type ServiceItem } from '@/redux/features/services/apiSlice'
import { clearNewServiceDraft, setNewServiceDraft } from '@/redux/features/services/servicesSlice'
import type { RootState } from '@/redux/store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FixedPrice from './FixedPrice'
import Hourly from './Hourly'
import MultiplePrice from './MultiplePrice'

type IProps = {
  setStep: (stepIndex: number) => void
}

const ItemPricing: React.FC<IProps> = ({ setStep }) => {
  const [pricingType, setPricingType] = useState<string>('fixed')

  /**TODO:
   * adding data to store
   * create a hook to managgin all dispatch
   * create a apiSlice to manage post request
   * clean store data
   *
   */
  const [addService, { isLoading, isError, isSuccess, error }] = useAddServiceMutation()

  /**TODO:
   * Need to work on these: isLoading, isError, isSuccess, error
   *
   */

  const newServiceDraft = useSelector((state: RootState) => state.services.newServiceDraft)
  const handleSubmit = async (e: React.FormEvent) => {
    // router.push('/dashboard/vendor/listings?modal=true')
    e.preventDefault()

    // if (!title || !description || quantity <= 0) {
    //   alert('Please fill in all fields with valid values.')
    //   return
    // }
    const demoService: Omit<ServiceItem, 'id'> = {
      user: '671e315ed10e02c3ec3dacc3',
      title: 'Luxury Car Rental',
      description: 'Rent a luxury car for your special occasions or business needs.',
      featured_image: null,
      slug: `${new Date()} Luxury-Car-Rental`,
      category: '67285176c4451f913cfdfd39',
      location: '6723595d8d9a6dbaaffbf3d9',
      inclusions: [],
      infos: [],
      is_featured: true,
      price_type: pricingType,
      price: [{ text: '', value: 50 }],
      security_deposit: 200,
      cancellation_period_hours: 40,
      availability: [
        { days: 'mon', start_time: '08:00', end_time: '18:00' },
        { days: 'sat', start_time: '10:00', end_time: '16:00' }
      ],
      is_unavailable: false,
      status: 'publish'
    }

    try {
      const response = await addService(demoService).unwrap()
      console.log('Service added successfully:', response)
      alert('Service added successfully!')
      dispatch(clearNewServiceDraft())
    } catch (err) {
      console.error('Failed to add product:', err)
    }
  }

  const dispatch = useDispatch()
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    dispatch(setNewServiceDraft({ field: 'price_type', value }))
    console.log('New Service Draft:', newServiceDraft.price_type)
  }
  return (
    <div className="w-full max-w-[736px] rounded-lg bg-white p-6 shadow">
      <p className="mb-6 text-xl font-bold text-clr-36 md:text-2xl">Item Pricing</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="price"
          label="Price"
          type="select"
          options={['fixed', 'hourly', 'multiple_fixed']}
          onChange={e => handleInputChange(e)}
          customClass="mb-4"
        />
        {pricingType === 'fixed' && <FixedPrice />}
        {pricingType === 'hourly' && <Hourly />}
        {pricingType === 'Multiple pricing range' && <MultiplePrice />}
        <div className="mt-6 border-b border-gray-200" />
        <GrayBtn name="Back" onClick={() => setStep(2)} />
        <DashboardButton name="Submit" type="submit" className="mt-5" />
      </form>
    </div>
  )
}

export default ItemPricing
