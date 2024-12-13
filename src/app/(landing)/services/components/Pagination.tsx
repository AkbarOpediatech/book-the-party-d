import { cn } from '@/utils'
import { useState } from 'react'

interface IProps {
  totalRecords: number
  currentPage: number
  pageLimit: number
  handlePageChange: (page: number) => void
  rootClassName?: string
}

const Pagination = ({ totalRecords, currentPage, pageLimit, handlePageChange, rootClassName }: IProps) => {
  const totalPages = Math.ceil(totalRecords / pageLimit)
  const pageRange = 5
  const [pageOffset, setPageOffset] = useState(0)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
      scrollToTop()
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
      scrollToTop()
    }
  }

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      handlePageChange(page)
      scrollToTop()
    }
  }

  const handleShowMorePages = () => {
    setPageOffset(pageOffset + pageRange)
    scrollToTop()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const startPage = Math.max(1, pageOffset + 1)
  const endPage = Math.min(totalPages, pageOffset + pageRange)
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

  return (
    <div className={cn(rootClassName)}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          className={cn('px-4 py-2 text-sm md:text-base', currentPage === 1 && 'text-gray-400')}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <div className="flex flex-wrap justify-center gap-3">
          {pages[0] > 1 && (
            <button
              className="h-10 w-10 rounded-md border font-sora text-lg text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white md:h-16 md:w-16"
              onClick={() => handlePageClick(1)}
            >
              1
            </button>
          )}

          {pages[0] > 2 && <span className="font-sora text-lg">...</span>}

          {pages.map(page => (
            <button
              key={page}
              className={`h-10 w-10 rounded-md border font-sora text-lg ${
                page === currentPage
                  ? 'bg-clr-fb text-white'
                  : 'text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white'
              } md:h-16 md:w-16`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}

          {pages[pages.length - 1] < totalPages - 1 && (
            <span
              className="cursor-pointer font-sora text-lg hover:text-clr-fb"
              onClick={handleShowMorePages}
            >
              ...
            </span>
          )}

          {pages[pages.length - 1] < totalPages && (
            <button
              className="h-10 w-10 rounded-md border font-sora text-lg text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white md:h-16 md:w-16"
              onClick={() => handlePageClick(totalPages)}
            >
              {totalPages}
            </button>
          )}
        </div>

        <button
          className={cn('px-4 py-2 text-sm md:text-base', currentPage === totalPages && 'text-gray-400')}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
