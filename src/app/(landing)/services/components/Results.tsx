'use client'
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
  return (
    <>
      <ResultBtnAction handleGridClick={handleGridClick} handleListClick={handleListClick} />
      <div className="mb-10">{viewMode === 'grid' ? <GridItems /> : <ListItems />}</div>
      <Pagination />
    </>
  )
}

export default Results
