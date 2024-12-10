// Results.tsx
'use client'
import usePagination from '@/hooks/usePagination'
import { useFetchServicesQuery } from '@/redux/features/services/apiSlice'
import { useState } from 'react'
import GridItems from './GridItems'
import ListItems from './ListItems'
import Pagination from './Pagination'
import ResultBtnAction from './ResultBtnAction'

const Results = () => {
  const [viewMode, setViewMode] = useState('grid')
  const { currentPage, pageLimit, handlePageChange } = usePagination()

  const handleGridClick = () => {
    setViewMode('grid')
  }

  const handleListClick = () => {
    setViewMode('list')
  }

  const {
    data: products,
    isLoading,
    isError
  } = useFetchServicesQuery({ limit: pageLimit, page: currentPage })

  const serviceData = products?.data
  const totalRecords = products?.pagination?.records || 0

  if (isLoading) return <div>Loading products...</div>
  if (isError) return <div>Error loading products.</div>

  return (
    <>
      <ResultBtnAction handleGridClick={handleGridClick} handleListClick={handleListClick} />
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
