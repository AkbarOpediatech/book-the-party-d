/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type FilterProps = {}

const Filter = ({}: FilterProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const queryCategories = searchParams.get('categories')?.replace(/\[|\]/g, '').split(',') || []
  const queryLocations = searchParams.get('location')?.replace(/\[|\]/g, '').split(',') || []

  const fetchedCategories = ['Category1', 'Category2', 'Category3']
  const fetchedLocations = ['Location1', 'Location2', 'Location3']

  const [selectedCategories, setSelectedCategories] = useState<string[]>(queryCategories)
  const [selectedLocations, setSelectedLocations] = useState<string[]>(queryLocations)

  useEffect(() => {
    setSelectedCategories(queryCategories)
    setSelectedLocations(queryLocations)
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    )
  }

  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location) ? prev.filter(item => item !== location) : [...prev, location]
    )
  }

  const generateApiUrl = () => {
    const baseUrl = 'http://localhost:3000/services'
    const queryParams = new URLSearchParams({
      page: '1',
      limit: '5',
      sort: 'price'
    })

    let apiUrl = `${baseUrl}?${queryParams.toString()}`
    if (selectedCategories.length) {
      apiUrl += `&categories=[${selectedCategories.join(',')}]`
    }
    if (selectedLocations.length) {
      apiUrl += `&location=[${selectedLocations.join(',')}]`
    }

    console.log('Generated API URL:', apiUrl)
    router.push(apiUrl)
    // return apiUrl
  }

  return (
    <div className="rounded-[32px] border px-8 py-5">
      <div className="mb-6 border-b pb-6">
        <h3 className="mb-6 font-sora font-bold text-black">Categories</h3>
        {fetchedCategories.map(cat => (
          <div key={cat} className="mb-3 flex items-center justify-between">
            <label className="flex cursor-pointer items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="h-4 w-4 cursor-pointer rounded-md border border-gray-500"
              />
              <span className="text-xl">{cat}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="mb-6 border-b pb-6">
        <h3 className="mb-6 font-sora font-bold text-black">Locations</h3>
        {fetchedLocations.map(loc => (
          <div key={loc} className="mb-3 flex items-center justify-between">
            <label className="flex cursor-pointer items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedLocations.includes(loc)}
                onChange={() => handleLocationChange(loc)}
                className="h-4 w-4 cursor-pointer rounded-md border border-gray-500"
              />
              <span className="text-xl">{loc}</span>
            </label>
          </div>
        ))}
      </div>

      <button onClick={generateApiUrl} className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white">
        Filter
      </button>
    </div>
  )
}

export default Filter
