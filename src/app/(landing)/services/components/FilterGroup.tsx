/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
const FilterGroup = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const queryCategories = searchParams.get('categories')?.replace(/\[|\]/g, '').split(',') || []
  const queryLocations = searchParams.get('location')?.replace(/\[|\]/g, '').split(',') || []
  const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' }
  ]

  const fetchedCategories = ['Category1', 'Category2', 'Category3']
  const fetchedLocations = ['Location1', 'Location2', 'Location3']

  const [selectedCategories, setSelectedCategories] = useState<string[]>(queryCategories)
  const [selectedLocations, setSelectedLocations] = useState<string[]>(queryLocations)

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true)
  const [isLocationsOpen, setIsLocationsOpen] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  useEffect(() => {
    setSelectedCategories(queryCategories)
    setSelectedLocations(queryLocations)
  }, [])

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
  }
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
  return (
    <div>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="flex items-center gap-3 rounded border px-4 py-3 font-nunito text-lg font-light text-black sm:text-xl md:hidden"
      >
        <AdjustmentsHorizontalIcon className="size-4" /> Filter
      </button>
      <div
        className={`fixed right-0 top-0 z-40 h-full w-3/4 max-w-xs transform bg-white shadow-lg transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-6">
          {/* Close Icon */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="mb-4 flex items-center justify-end text-black"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Categories */}
          <div className="mb-6 border-b pb-6">
            <h3
              className="mb-6 flex cursor-pointer font-sora font-bold text-black"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              Categories
            </h3>
            {isCategoriesOpen &&
              fetchedCategories.map(cat => (
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

          {/* Locations */}
          <div className="mb-6 border-b pb-6">
            <h3
              className="mb-6 flex cursor-pointer font-sora font-bold text-black"
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
            >
              Locations
            </h3>
            {isLocationsOpen &&
              fetchedLocations.map(loc => (
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
          {/* <div className="my-5 block w-full md:hidden md:w-auto lg:mt-auto">
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
              <ListboxButton className="flex w-full items-center justify-between gap-2 rounded-lg border border-black px-5 py-[10px] text-sm sm:text-base lg:w-auto">
                {selectedPerson.name}
                <ChevronDownIcon className="size-6 font-extralight" />
              </ListboxButton>

              <ListboxOptions className="mt-2 space-y-2 rounded-lg border bg-white py-2">
                {people.map(person => (
                  <ListboxOption
                    key={person.id}
                    value={person}
                    className="cursor-pointer px-8 text-start hover:bg-blue-100"
                  >
                    {person.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div> */}

          <button
            onClick={() => {
              setIsSidebarOpen(false) // Close the sidebar
              generateApiUrl()
            }}
            className="w-full rounded-2xl bg-clr-87 py-3 font-sora text-sm text-white"
          >
            Apply Filters
          </button>
        </div>
      </div>
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 z-30 bg-black/50 md:hidden" />
      )}
    </div>
  )
}

export default FilterGroup
