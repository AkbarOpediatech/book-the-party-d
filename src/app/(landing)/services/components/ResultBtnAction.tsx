import Image from 'next/image'
import FilterGroup from './FilterGroup'
import ICGrid from '/public/assets/ic-grid.svg'
import ICList from '/public/assets/ic-list.svg'

type IProps = {
  handleGridClick: () => void
  handleListClick: () => void
  totalRecords: number
  currentPage: number
  pageLimit: number
}

const ResultBtnAction: React.FC<IProps> = ({
  handleGridClick,
  handleListClick,
  totalRecords,
  currentPage,
  pageLimit
}) => {
  const totalPages = Math.ceil(totalRecords / pageLimit)

  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:flex-row md:flex-row md:items-center">
      <div className="md:hidden">
        <FilterGroup />
      </div>
      <div className="md:p-auto border px-4 py-3 md:border-none">
        <div className="flex items-center justify-between gap-5">
          <div className="flex gap-3 sm:gap-5">
            <button onClick={() => handleGridClick()}>
              <Image src={ICGrid} alt="Grid icon" />
            </button>
            <button onClick={() => handleListClick()}>
              <Image src={ICList} alt="List icon" />
            </button>
          </div>
          <p className="font-nunito text-lg font-light text-black sm:text-xl">
            Showing {currentPage} – {totalPages} of {totalRecords} results
          </p>
        </div>
      </div>
      {/* <div className="mt-5 hidden w-full md:block md:w-auto lg:mt-auto">
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <ListboxButton className="flex w-full items-center justify-between gap-2 rounded-lg border border-black px-5 py-[10px] text-sm sm:text-base lg:w-auto">
            {selectedPerson.name}
            <ChevronDownIcon className="size-6 font-extralight" />
          </ListboxButton>

          <ListboxOptions className="mt-2 space-y-2 rounded-lg border bg-white py-2">
            {people.map(person => (
              <ListboxOption
                key={person.id}
                value={person}
                className="cursor-pointer px-8 text-start hover:bg-blue-100"
              >
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div> */}
    </div>
  )
}

export default ResultBtnAction
