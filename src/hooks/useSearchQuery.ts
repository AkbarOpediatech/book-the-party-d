// hooks/useSearchQuery.ts
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export interface SearchFormData {
  search: string
  location: string
  categories: string
  date: string
}

const useSearchQuery = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<SearchFormData>({
    search: '',
    location: '',
    categories: '',
    date: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSearchClick = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // Ensure all values are strings
    const query = new URLSearchParams(
      Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.toString()]))
    ).toString()

    router.push(`/services?${query}`)
  }

  return {
    formData,
    handleInputChange,
    handleSearchClick
  }
}

export default useSearchQuery
