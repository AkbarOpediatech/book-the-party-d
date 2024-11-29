import { bookingDetails, cn } from '@/utils'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/16/solid'

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
          <DisclosureButton className="group flex w-full items-center justify-between gap-4 text-start text-base font-medium capitalize text-neutral-900 md:text-xl">
            {i.title}
            <PlusIcon className="size-5 flex-shrink-0 fill-black group-data-[open]:rotate-45" />
          </DisclosureButton>
          <DisclosurePanel className="mt-[30px] text-base text-clr-682 md:text-xl">{i.desc}</DisclosurePanel>
        </Disclosure>
      ))}
    </>
  )
}

export default BookingDetails
