'use client'
import Image from 'next/image'
import ICGrid from '/public/assets/ic-grid.svg'
import ICList from '/public/assets/ic-list.svg'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' }
]

const Results = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="btn-group flex gap-5">
            <button>
              <Image src={ICGrid} alt="icon" />
            </button>
            <button>
              <Image src={ICList} alt="icon" />
            </button>
          </div>
          <p className="font-nunito text-xl font-light text-black">Showing 1–12 of 60 results</p>
        </div>
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <ListboxButton className={'flex gap-2 rounded-lg border border-black px-5 py-[10px]'}>
            {selectedPerson.name}
            <ChevronDownIcon className="size-6 font-extralight" />
          </ListboxButton>

          <ListboxOptions anchor="bottom" className={'mt-2 space-y-2 rounded-lg border py-2'}>
            {people.map(person => (
              <ListboxOption
                key={person.id}
                value={person}
                className="cursor-pointer px-8 text-start data-[focus]:bg-blue-100"
              >
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </>
  )
}

export default Results
