/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react'

/** Options for filtering */
interface FilterOptions<T> {
  searchKeys: (keyof T | string)[]
  dateKey?: keyof T | string
}

type UseSearchReturn<T> = {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  startDate: string
  setStartDate: React.Dispatch<React.SetStateAction<string>>
  endDate: string
  setEndDate: React.Dispatch<React.SetStateAction<string>>
  filteredData: T[]
}

/**
 * Custom hook for search and date range filtering
 * @param data - The dataset to filter
 * @param options - Filter options including search keys and date key
 * @returns Filtered data and state management utilities
 */
const useSearch = <T,>(data: T[], options: FilterOptions<T>): UseSearchReturn<T> => {
  const { searchKeys, dateKey } = options

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  const filteredData = useMemo(() => {
    let result = data

    // Filter by search term
    if (searchTerm) {
      result = result.filter(item =>
        searchKeys.some(key => {
          const value = key
            .toString()
            .split('.')
            .reduce((acc, part) => acc?.[part], item as any) // Handles nested keys
          return value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        })
      )
    }

    // Filter by date range
    if (dateKey && (startDate || endDate)) {
      result = result.filter(item => {
        const dateValue = new Date(
          dateKey
            .toString()
            .split('.')
            .reduce((acc, part) => acc?.[part], item as any)
        )
        const start = startDate ? new Date(startDate) : null
        const end = endDate ? new Date(endDate) : null

        return (!start || dateValue >= start) && (!end || dateValue <= end)
      })
    }

    return result
  }, [data, searchTerm, startDate, endDate, searchKeys, dateKey])

  return {
    searchTerm,
    setSearchTerm,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    filteredData
  }
}

export default useSearch
