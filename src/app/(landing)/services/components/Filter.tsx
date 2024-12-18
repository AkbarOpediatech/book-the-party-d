/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Disclosure } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface FilterProps {}

const Filter = ({}: FilterProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const fetchedCategories = ['Party Packages', 'Category1', 'Category2', 'Category3']
  const fetchedLocations = ['Melbourne', 'Sydney', 'Australia']

  // Retrieve query parameters for categories and location
  const queryCategories = searchParams.get('categories')?.split(',') || []
  const queryLocations = searchParams.get('location')?.split(',') || []

  const [selectedCategories, setSelectedCategories] = useState<string[]>(queryCategories)
  const [selectedLocations, setSelectedLocations] = useState<string[]>(queryLocations)

  // Sync state with query params when they change
  useEffect(() => {
    setSelectedCategories(queryCategories)
    setSelectedLocations(queryLocations)
  }, [])

  // Generate the new API URL
  const generateApiUrl = () => {
    const baseUrl = 'http://localhost:3000/services'
    const queryParams = new URLSearchParams({
      page: '1',
      limit: '5',
      sort: 'price'
    })

    // Add categories to the query string
    if (selectedCategories.length) {
      queryParams.set('categories', selectedCategories.join(','))
    }

    // Add location to the query string
    if (selectedLocations.length) {
      queryParams.set('location', selectedLocations.join(','))
    }

    const apiUrl = `${baseUrl}?${queryParams.toString()}`
    console.log('Generated API URL:', apiUrl)
    router.push(apiUrl)
  }

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    )
  }

  // Handle location change
  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location) ? prev.filter(item => item !== location) : [...prev, location]
    )
  }

  return (
    <div className="hidden rounded-[32px] border px-8 py-5 md:block">
      <div className="mb-6 border-b pb-6">
        <Disclosure defaultOpen>
          <Disclosure.Button className="mb-6 cursor-pointer font-sora font-bold text-black">
            Categories
          </Disclosure.Button>

          <Disclosure.Panel className="text-gray-500">
            {fetchedCategories.map((cat, index) => (
              <label className="relative mb-4 flex cursor-pointer items-center gap-2" key={index}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                  className="peer hidden"
                />
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-gray-500 bg-white peer-checked:border-purple-600 peer-checked:bg-purple-600">
                  <CheckIcon className="h-4 w-4 text-white peer-checked:block" />
                </div>
                <span className="text-base text-black">{cat}</span>
              </label>
            ))}
          </Disclosure.Panel>
        </Disclosure>
      </div>

      <div className="mb-6 border-b pb-6">
        <Disclosure defaultOpen>
          <Disclosure.Button className="mb-6 cursor-pointer font-sora font-bold text-black">
            Locations
          </Disclosure.Button>

          <Disclosure.Panel className="text-gray-500">
            {fetchedLocations.map((loc, index) => (
              <label className="relative mb-4 flex cursor-pointer items-center gap-2" key={index}>
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(loc)}
                  onChange={() => handleLocationChange(loc)}
                  className="peer hidden"
                />
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-gray-500 bg-white peer-checked:border-purple-600 peer-checked:bg-purple-600">
                  <CheckIcon className="h-4 w-4 text-white peer-checked:block" />
                </div>
                <span className="text-base text-black">{loc}</span>
              </label>
            ))}
          </Disclosure.Panel>
        </Disclosure>
      </div>

      <button
        onClick={generateApiUrl}
        className="w-full rounded-2xl bg-clr-87 py-3 font-sora text-sm text-white"
      >
        Filter
      </button>
    </div>
  )
}

export default Filter

{
  /* <div className="mb-6 border-b pb-6">
<Disclosure defaultOpen>
  <DisclosureButton className="mb-6 cursor-pointer font-sora font-bold text-black">
    Locations
  </DisclosureButton>
  <DisclosurePanel className="text-gray-500">
    {fetchedLocations.map((loc, index) => (
      <label className="relative mb-4 flex cursor-pointer items-center gap-2" key={index}>
        <input
          type="checkbox"
          checked={selectedLocations.includes(loc)}
          onChange={() => handleLocationChange(loc)}
          className="peer hidden"
        />
        <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-gray-500 bg-white peer-checked:border-purple-600 peer-checked:bg-purple-600">
          <CheckIcon className="h-4 w-4 text-white peer-checked:block" />
        </div>
        <span className="text-base text-black">{loc}</span>
      </label>
    ))}
  </DisclosurePanel>
</Disclosure>
</div> */
}
