/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useFetchCategoriesQuery, type CategoryFetch } from '@/redux/features/categories/apiSlice'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface FilterProps {}

const Filter = ({}: FilterProps) => {
  const { data: category, isLoading, isError } = useFetchCategoriesQuery()

  const searchParams = useSearchParams()
  const router = useRouter()

  const fetchedCategories: CategoryFetch[] = category?.data || []
  const fetchedLocations = [
    {
      id: '6723595d8d9a6dbaaffbf3d9',
      title: 'Brisbane'
    },
    {
      id: '672359bb8d9a6dbaaffbf3dd',
      title: 'Melbourne'
    },
    {
      id: '6723599b8d9a6dbaaffbf3db',
      title: 'Sydney'
    }
  ]

  const queryCategories = searchParams.get('categories')?.split(',') || []
  const queryLocations = searchParams.get('location')?.split(',') || []

  const [selectedCategories, setSelectedCategories] = useState<string[]>(queryCategories)
  const [selectedLocations, setSelectedLocations] = useState<string[]>(queryLocations)

  useEffect(() => {
    setSelectedCategories(queryCategories)
    setSelectedLocations(queryLocations)
  }, [])

  const generateApiUrl = () => {
    const baseUrl = 'http://localhost:3000/services'

    const categoryParam = selectedCategories.length ? `categories=${selectedCategories.join(',')}` : ''

    const locationParam = selectedLocations.length ? `location=${selectedLocations.join(',')}` : ''

    const queryString = [categoryParam, locationParam].filter(Boolean).join('&')

    const apiUrl = `${baseUrl}${queryString ? `?${queryString}` : ''}`
    window.location.href = apiUrl
  }

  const handleCategoryChange = (slug: string) => {
    setSelectedCategories(prev =>
      prev.includes(slug) ? prev.filter(item => item !== slug) : [...prev, slug]
    )
  }

  const handleLocationChange = (locationId: string) => {
    setSelectedLocations(prev =>
      prev.includes(locationId) ? prev.filter(item => item !== locationId) : [...prev, locationId]
    )
  }

  return (
    <div className="hidden rounded-[32px] border px-8 py-5 md:block">
      <div className="mb-6 border-b pb-6">
        <Disclosure defaultOpen>
          <DisclosureButton className="mb-6 flex w-full cursor-pointer items-center justify-between font-sora font-bold text-black">
            Categories <ChevronDownIcon className="size-4" />
          </DisclosureButton>

          <DisclosurePanel className="text-gray-500">
            {fetchedCategories.map(cat => (
              <label className="relative mb-4 flex cursor-pointer items-center gap-2" key={cat._id}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.slug || '')}
                  onChange={() => handleCategoryChange(cat.slug || '')}
                  className="peer hidden"
                />
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-gray-500 bg-white peer-checked:border-purple-600 peer-checked:bg-purple-600">
                  <CheckIcon className="h-4 w-4 text-white peer-checked:block" />
                </div>
                <span className="text-base text-black">{cat.title}</span>
              </label>
            ))}
          </DisclosurePanel>
        </Disclosure>
      </div>

      <div className="mb-6 border-b pb-6">
        <Disclosure defaultOpen>
          <DisclosureButton className="mb-6 flex w-full cursor-pointer items-center justify-between font-sora font-bold text-black">
            Locations <ChevronDownIcon className="size-4" />
          </DisclosureButton>

          <DisclosurePanel className="text-gray-500">
            {fetchedLocations.map((location, index) => (
              <label className="relative mb-4 flex cursor-pointer items-center gap-2" key={index}>
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location.title)}
                  onChange={() => handleLocationChange(location.title)}
                  className="peer hidden"
                />
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-gray-500 bg-white peer-checked:border-purple-600 peer-checked:bg-purple-600">
                  <CheckIcon className="h-4 w-4 text-white peer-checked:block" />
                </div>
                <span className="text-base text-black">{location.title}</span>
              </label>
            ))}
          </DisclosurePanel>
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
