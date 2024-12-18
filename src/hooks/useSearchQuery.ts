import { useRouter } from 'next/navigation'
import { useState } from 'react'

export interface SearchFormData {
  search: string
  location: string
  categories: string
  date: string
  occasion: string
}

const useSearchQuery = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<SearchFormData>({
    search: '',
    location: '',
    categories: '',
    date: '',
    occasion: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSearchClick = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const query = new URLSearchParams(
      Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.toString()]))
    ).toString()

    // Simulate API call or navigation delay
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated delay

    router.push(`/services?${query}`)
    setIsLoading(false) // Reset loading state
  }

  return {
    formData,
    handleInputChange,
    handleSearchClick,
    isLoading
  }
}

export default useSearchQuery
