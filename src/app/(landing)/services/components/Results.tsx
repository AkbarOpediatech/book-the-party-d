'use client'

import usePagination from '@/hooks/usePagination'
import { useFetchServicesQuery } from '@/redux/features/services/apiSlice'
import { useState } from 'react'
import Loader from '../../components/Loader/Loader'
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
  category: string[]
}

const Results = ({ searchParams }: ResultsProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const { currentPage, pageLimit, handlePageChange } = usePagination()
  const categoriesParam = searchParams.get('categories')
  const locationParam = searchParams.get('location')
  const titleParam = searchParams.get('title')
  const categories = categoriesParam ? decodeURIComponent(categoriesParam).split(',').filter(Boolean) : []
  const location = locationParam ? decodeURIComponent(locationParam).split(',').filter(Boolean) : []

  const [filters, setFilters] = useState<FilterState>({
    title: titleParam || '',
    description: '',
    category: categories
  })

  const {
    data: products,
    isLoading,
    isError
  } = useFetchServicesQuery({
    limit: pageLimit,
    page: currentPage,
    populate: ['user', 'category', 'location'],
    location: location,
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

  if (isLoading) return <Loader type="loading" message="Please sometimes wait." />
  if (isError) return <Loader type="error" message="Please try again later." />

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
            // TODO:Need to added add to wishlist functionality
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
