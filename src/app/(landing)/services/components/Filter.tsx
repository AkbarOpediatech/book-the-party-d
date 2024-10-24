'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const Filter = () => {
  // State for each checkbox
  const [categoryChecked, setCategoryChecked] = useState(false)
  const [locationChecked, setLocationChecked] = useState(false)
  const [priceChecked, setPriceChecked] = useState(false)
  const [sortLowestChecked, setSortLowestChecked] = useState(false)
  const [sortHighestChecked, setSortHighestChecked] = useState(false)
  const [topViewedChecked, setTopViewedChecked] = useState(false)
  const [locationSortChecked, setLocationSortChecked] = useState(false)
  const [bestReviewedChecked, setBestReviewedChecked] = useState(false)
  const [recommendedChecked, setRecommendedChecked] = useState(false)

  return (
    <div className="rounded-[32px] border px-8 py-5">
      {/* Categories */}
      <Disclosure as="div" defaultOpen={true} className={'mb-6 border-b pb-6'}>
        {/* Heading */}
        <DisclosureButton className="group mb-6 flex w-full items-center justify-between">
          <span className="font-sora font-bold text-black">Categories</span>
          <ChevronDownIcon className="size-5 fill-black group-data-[open]:rotate-180" />
        </DisclosureButton>

        <DisclosurePanel>
          <div className="flex items-center justify-between">
            <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
              <div
                className={`relative h-4 w-4 rounded-md border border-gray-500 ${categoryChecked && 'border-purple-700 bg-purple-700'}`}
              >
                <input
                  type="checkbox"
                  checked={categoryChecked}
                  onChange={() => setCategoryChecked(!categoryChecked)}
                  className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
                />
                {categoryChecked && (
                  <CheckIcon
                    className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                    fill="white"
                  />
                )}
              </div>
              <p className="text-2xl text-black">Party setup & prop hire packages</p>
            </label>
            <p className="text-2xl text-black">(120)</p>
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Location */}
      <Disclosure as="div" defaultOpen={true} className={'mb-6 border-b pb-6'}>
        {/* Heading */}
        <DisclosureButton className="group mb-6 flex w-full items-center justify-between">
          <span className="font-sora font-bold text-black">Location</span>
          <ChevronDownIcon className="size-5 fill-black group-data-[open]:rotate-180" />
        </DisclosureButton>

        <DisclosurePanel className={'space-y-5'}>
          <div className="flex items-center justify-between">
            <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
              <div
                className={`relative h-4 w-4 rounded-md border border-gray-500 ${locationChecked && 'border-purple-700 bg-purple-700'}`}
              >
                <input
                  type="checkbox"
                  checked={locationChecked}
                  onChange={() => setLocationChecked(!locationChecked)}
                  className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
                />
                {locationChecked && (
                  <CheckIcon
                    className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                    fill="white"
                  />
                )}
              </div>
              <p className="text-2xl text-black">Sydney</p>
            </label>
            <p className="text-2xl text-black">(20)</p>
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Filter by Price */}
      <Disclosure as="div" defaultOpen={true} className={'mb-6 border-b pb-6'}>
        {/* Heading */}
        <DisclosureButton className="group mb-6 flex w-full items-center justify-between">
          <span className="font-sora font-bold text-black">Filter by Price</span>
          <ChevronDownIcon className="size-5 fill-black group-data-[open]:rotate-180" />
        </DisclosureButton>

        <DisclosurePanel>
          <div className="flex items-center justify-between">
            <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
              <div
                className={`relative h-4 w-4 rounded-md border border-gray-500 ${priceChecked && 'border-purple-700 bg-purple-700'}`}
              >
                <input
                  type="checkbox"
                  checked={priceChecked}
                  onChange={() => setPriceChecked(!priceChecked)}
                  className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
                />
                {priceChecked && (
                  <CheckIcon
                    className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                    fill="white"
                  />
                )}
              </div>
              <p className="text-2xl text-black">Party setup & prop hire packages</p>
            </label>
            <p className="text-2xl text-black">(120)</p>
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Sort By */}
      <Disclosure as="div" defaultOpen={true} className={'mb-6 pb-6'}>
        {/* Heading */}
        <DisclosureButton className="group mb-6 flex w-full items-center justify-between">
          <span className="font-sora font-bold text-black">Sort By</span>
          <ChevronDownIcon className="size-5 fill-black group-data-[open]:rotate-180" />
        </DisclosureButton>

        <DisclosurePanel className={'space-y-5'}>
          {/* Sort options */}
          {[
            {
              label: 'Price lowest to highest',
              checked: sortLowestChecked,
              setChecked: setSortLowestChecked
            },
            {
              label: 'Price highest to lowest',
              checked: sortHighestChecked,
              setChecked: setSortHighestChecked
            },
            { label: 'Top viewed', checked: topViewedChecked, setChecked: setTopViewedChecked },
            { label: 'Location', checked: locationSortChecked, setChecked: setLocationSortChecked },
            { label: 'Best reviewed', checked: bestReviewedChecked, setChecked: setBestReviewedChecked },
            { label: 'Recommended', checked: recommendedChecked, setChecked: setRecommendedChecked }
          ].map(({ label, checked, setChecked }) => (
            <div className="flex items-center justify-between" key={label}>
              <label className="flex w-full max-w-[410px] cursor-pointer items-center space-x-3">
                <div
                  className={`relative h-4 w-4 rounded-md border border-gray-500 ${checked && 'border-purple-700 bg-purple-700'}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="hidden h-4 w-4 cursor-pointer appearance-none rounded-md border border-gray-500 checked:bg-purple-700 focus:ring-purple-700"
                  />
                  {checked && (
                    <CheckIcon
                      className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2"
                      fill="white"
                    />
                  )}
                </div>
                <p className="text-2xl text-black">{label}</p>
              </label>
            </div>
          ))}
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default Filter
