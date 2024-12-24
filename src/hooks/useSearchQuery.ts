import { useRouter } from 'next/navigation'
import { useState } from 'react'

export interface SearchFormData {
  title: string
  location: string
  categories: string
  date: string
}

const useSearchQuery = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<SearchFormData>({
    title: '',
    location: '',
    categories: '',
    date: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSearchClick = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Filter out empty fields from formData
    const filteredFormData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value.trim() !== '')
    )

    const query = new URLSearchParams(filteredFormData).toString()

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
