import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import avater from '/public/assets/avatar.jpeg'

const Conversation = () => {
  return (
    <div className="no-scroll flex h-full flex-col gap-4 overflow-y-scroll border-t border-gray-200 p-4">
      <div className="flex items-start gap-2.5">
        <div className="size-8 overflow-hidden rounded-full">
          <Image className="object-cover" src={avater} alt="pic" />
        </div>
        <div className="w-full max-w-[316px]">
          <div className="mb-1 flex items-center gap-1.5 font-inter text-sm">
            <p className="text-gray-900">Roberta Casas </p>
            <p className="text-gray-500">11:46</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-full rounded-[20px] bg-gray-100 p-4">
              <p className="font-inter text-sm text-gray-900">
                That's awesome. I think our users will really appreciate the improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-end gap-2.5">
        <div className="size-8 overflow-hidden rounded-full">
          <Image className="object-cover" src={avater} alt="pic" />
        </div>
        <div className="w-full max-w-[316px]">
          <div className="mb-1 flex items-center gap-1.5 font-inter text-sm">
            <p className="text-gray-900">Roberta Casas </p>
            <p className="text-gray-500">11:46</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-full rounded-[20px] bg-gray-100 p-4">
              <p className="font-inter text-sm text-gray-900">
                That's awesome. I think our users will really appreciate the improvements.
              </p>
            </div>
            <Menu>
              <MenuButton>
                <EllipsisVerticalIcon className="size-4 fill-black/30" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-36 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                    <PencilIcon className="size-4 fill-black/30" />
                    Edit
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
                    <Square2StackIcon className="size-4 fill-black/30" />
                    Duplicate
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conversation
