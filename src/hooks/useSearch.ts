/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo, useState } from 'react'

/** Options for filtering */
interface FilterOptions<T> {
  searchKeys: (keyof T | string)[]
  dateKey?: keyof T | string
  statusKey?: keyof T | string
}

type UseSearchReturn<T> = {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  startDate: string
  setStartDate: React.Dispatch<React.SetStateAction<string>>
  endDate: string
  setEndDate: React.Dispatch<React.SetStateAction<string>>
  filteredData: T[]
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>
}

/**
 * Custom hook for search, date range, and status filtering
 * @param data - The dataset to filter
 * @param options - Filter options including search keys, date key, and status key
 * @returns Filtered data and state management utilities
 */
const useSearch = <T>(data: T[], options: FilterOptions<T>): UseSearchReturn<T> => {
  const { searchKeys, dateKey, statusKey } = options

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [statusFilter, setStatusFilter] = useState<string>('')

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

    // Filter by status
    if (statusKey && statusFilter) {
      result = result.filter(item => {
        const statusValue = statusKey
          .toString()
          .split('.')
          .reduce((acc, part) => acc?.[part], item as any)
        return statusValue === statusFilter
      })
    }

    return result
  }, [data, searchTerm, startDate, endDate, statusKey, statusFilter, searchKeys, dateKey])

  return {
    searchTerm,
    setSearchTerm,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    filteredData,
    setStatusFilter
  }
}

export default useSearch
