'use client'
import { useFetchServicesQuery } from '@/redux/features/services/apiSlice'
import { useState } from 'react'
import GridItems from './GridItems'
import ListItems from './ListItems'
import Pagination from './Pagination'
import ResultBtnAction from './ResultBtnAction'
const Results = () => {
  const [viewMode, setViewMode] = useState('grid')
  const handleGridClick = () => {
    setViewMode('grid')
  }

  const handleListClick = () => {
    setViewMode('list')
  }

  const { data: products, isLoading, isError } = useFetchServicesQuery({ page: 2 })
  const fullResponse = products
  const serviceData = fullResponse?.data //FIXME:

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
      <Pagination />
    </>
  )
}

export default Results
