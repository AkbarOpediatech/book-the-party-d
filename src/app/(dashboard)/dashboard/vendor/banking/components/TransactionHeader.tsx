import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  Square2StackIcon
} from '@heroicons/react/16/solid'

const TransactionHeader = () => {
  return   <div className="mb-7">
  <div className="mb-1 flex items-center justify-between gap-2">
    <h2 className="text-lg font-bold text-clr-1d">$23,99.55</h2>
    <Menu>
      <MenuButton>
        <EllipsisHorizontalIcon className="size-4 fill-black/30" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
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
  <p className="text-sm text-clr-682">Last withdraw : 12.2.2024</p>
</div>
}

export default TransactionHeader
