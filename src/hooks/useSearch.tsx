import { useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSearch = (data: any[], searchTerm: string, searchKeys: string[]) => {
  const filteredData = useMemo(() => {
    if (!searchTerm) return data
    return data.filter(item =>
      searchKeys.some(key => {
        const value = key.split('.').reduce((acc, part) => acc?.[part], item) // Handles nested keys
        return value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      })
    )
  }, [data, searchTerm, searchKeys])

  return filteredData
}

export default useSearch
