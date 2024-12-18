'use client'

import usePagination from '@/hooks/usePagination'
import { useFetchServicesQuery } from '@/redux/features/services/apiSlice'
import { useEffect, useState } from 'react'
import GridItems from './GridItems'
import ListItems from './ListItems'
import Pagination from './Pagination'
import ResultBtnAction from './ResultBtnAction'

// Define types for props and state
interface ResultsProps {
  searchParams: URLSearchParams
}

interface FilterState {
  title: string
  description: string
}

const Results = ({ searchParams }: ResultsProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const { currentPage, pageLimit, handlePageChange } = usePagination()
  const categoriesParam = searchParams.get('categories')
  const locationParam = searchParams.get('location')

  const categories = categoriesParam
    ? decodeURIComponent(categoriesParam).split(',').filter(Boolean) // Decode, split by commas, and filter out any empty strings
    : []

  // Correctly decode and process the location
  const location = locationParam
    ? decodeURIComponent(locationParam).split(',').filter(Boolean) // Decode, split by commas, and filter out any empty strings
    : []

  // Log the cleaned-up categories and location
  useEffect(() => {
    console.log('Categories:', categories)
    console.log('Location:', location)
  }, [categories, location])

  const [filters, setFilters] = useState<FilterState>({
    title: '',
    description: ''
  })

  const {
    data: products,
    isLoading,
    isError
  } = useFetchServicesQuery({
    limit: pageLimit,
    page: currentPage,
    populate: ['user', 'category', 'location'],
    ...filters
  })

  const serviceData = products?.data
  const totalRecords = products?.pagination?.records || 0

  const handleGridClick = () => {
    setViewMode('grid')
  }

  const handleListClick = () => {
    setViewMode('list')
  }

  if (isLoading) return <div>Loading products...</div>
  if (isError) return <div>Error loading products.</div>

  return (
    <>
      <ResultBtnAction
        totalRecords={totalRecords}
        currentPage={currentPage}
        pageLimit={pageLimit}
        handleGridClick={handleGridClick}
        handleListClick={handleListClick}
      />
      {serviceData && (
        <div className="mb-10">
          {viewMode === 'grid' ? (
            <GridItems serviceData={serviceData} />
          ) : (
            <ListItems serviceData={serviceData} />
          )}
        </div>
      )}
      <Pagination
        totalRecords={totalRecords}
        currentPage={currentPage}
        pageLimit={pageLimit}
        handlePageChange={handlePageChange}
      />
    </>
  )
}

export default Results
