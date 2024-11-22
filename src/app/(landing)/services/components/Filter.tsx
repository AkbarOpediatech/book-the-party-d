'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { useRef, useState } from 'react'

const Filter = () => {
  const [categoryChecked, setCategoryChecked] = useState(false)
  const [locationChecked, setLocationChecked] = useState(false)
  const [sortLowestChecked, setSortLowestChecked] = useState(false)
  const [sortHighestChecked, setSortHighestChecked] = useState(false)
  const [topViewedChecked, setTopViewedChecked] = useState(false)
  const [locationSortChecked, setLocationSortChecked] = useState(false)
  const [bestReviewedChecked, setBestReviewedChecked] = useState(false)
  const [recommendedChecked, setRecommendedChecked] = useState(false)

  const [from, setFrom] = useState<number>(10)
  const [to, setTo] = useState<number>(80)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const min: number = 0
  const max: number = 100
  const calculatePosition = (value: number): number => {
    return ((value - min) / (max - min)) * 100
  }
  const updateSliderValue = (e: React.MouseEvent | React.TouchEvent, handle: 'from' | 'to') => {
    const slider = sliderRef.current
    if (!slider) return

    const sliderWidth = slider.clientWidth
    const sliderLeft = slider.getBoundingClientRect().left

    const clientX =
      e.type === 'touchmove' ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX
    let newValue = Math.round(((clientX - sliderLeft) / sliderWidth) * (max - min) + min)

    newValue = Math.max(min, Math.min(max, newValue))

    if (handle === 'from') {
      if (newValue <= to) setFrom(newValue)
    } else if (handle === 'to') {
      if (newValue >= from) setTo(newValue)
    }
  }
  const [isDragging, setIsDragging] = useState<'none' | 'from' | 'to'>('none')
  const startDragging = (handle: 'from' | 'to') => {
    setIsDragging(handle)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchend', handleMouseUp)
  }
  const handleMouseMove = (e: any) => {
    if (isDragging !== 'none') {
      updateSliderValue(e, isDragging)
    }
  }
  const handleMouseUp = () => {
    setIsDragging('none')
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('touchmove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('touchend', handleMouseUp)
  }

  return (
    <div className="rounded-[32px] border px-8 py-5">
      {/* Categories */}
      <Disclosure as="div" defaultOpen={true} className={'mb-6 border-b pb-6'}>
        {/* Heading */}
        <DisclosureButton className="group mb-6 flex w-full items-center justify-between">
          <span className="font-sora font-bold text-black">Categories</span>
          <ChevronDownIcon className="size-5 fill-black group-data-[open]:rotate-180" />
        </DisclosureButton>

        <DisclosurePanel className={'space-y-5'}>
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
              <p className="text-xl text-black md:text-2xl">Party setup & prop hire packages</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(120)</p>
          </div>

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
              <p className="text-xl text-black md:text-2xl">The Festive Flair Package</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(120)</p>
          </div>

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
              <p className="text-xl text-black md:text-2xl">The Radiant Revelry Set</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(120)</p>
          </div>

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
              <p className="text-xl text-black md:text-2xl">The Elegant Affair Bundle</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(120)</p>
          </div>

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
              <p className="text-xl text-black md:text-2xl">The Grand Gathering Package</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(120)</p>
          </div>

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
              <p className="text-xl text-black md:text-2xl">The Blissful Bash Kit</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(120)</p>
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
              <p className="text-xl text-black md:text-2xl">Sydney</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(20)</p>
          </div>

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
              <p className="text-xl text-black md:text-2xl">Melbourne</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(20)</p>
          </div>

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
              <p className="text-xl text-black md:text-2xl">Brisbane</p>
            </label>
            <p className="text-xl text-black md:text-2xl">(20)</p>
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
          <div className="flex items-center justify-center">
            <div>
              <div className="relative h-1 w-96 rounded-full bg-indigo-200" ref={sliderRef}>
                {/* Active range bar */}
                <div
                  className="absolute h-full bg-red-400"
                  style={{
                    left: `${calculatePosition(Math.min(from, to))}%`,
                    width: `${calculatePosition(Math.max(from, to)) - calculatePosition(Math.min(from, to))}%`
                  }}
                ></div>

                {/* From handle */}
                <div
                  className="absolute -top-2 z-30 -ml-2 h-5 w-5 cursor-pointer rounded-full bg-red-600 shadow-lg"
                  style={{ left: `${calculatePosition(from)}%` }}
                  onMouseDown={() => startDragging('from')}
                  onTouchStart={() => startDragging('from')}
                ></div>

                {/* To handle */}
                <div
                  className="absolute -top-2 z-30 -ml-2 h-5 w-5 cursor-pointer rounded-full bg-red-600 shadow-lg"
                  style={{ left: `${calculatePosition(to)}%` }}
                  onMouseDown={() => startDragging('to')}
                  onTouchStart={() => startDragging('to')}
                ></div>
              </div>
              <div className="mt-2 flex select-none">
                <span className="flex-1">{Math.min(from, to)}</span>
                <span>{Math.max(from, to)}</span>
              </div>
            </div>
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
                <p className="text-xl text-black md:text-2xl">{label}</p>
              </label>
            </div>
          ))}
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default Filter
