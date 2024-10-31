import { bookingDetails, cn } from '@/utils'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

type IProps = {
  selectedTab: any
}

const BookingDetails: React.FC<IProps> = ({ selectedTab }) => {
  return (
    <>
      {bookingDetails.map((i, index) => (
        <Disclosure
          as="div"
          className={cn(
            'mb-7 border-b border-b-[#9CA3AF] pb-7 last:border-b-0',
            selectedTab && 'border-b-clr-fb'
          )}
          key={index}
        >
          <DisclosureButton className="group flex w-full items-center justify-between text-xl font-medium capitalize text-neutral-900">
            {i.title}
            <ChevronDownIcon className="size-5 fill-black group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-[30px] text-xl text-clr-682">{i.desc}</DisclosurePanel>
        </Disclosure>
      ))}
    </>
  )
}

export default BookingDetails
