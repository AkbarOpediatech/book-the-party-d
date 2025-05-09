import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import React from 'react'

type ActionMenuProps = {
  status: string | undefined
  id: string
  onCancel: (id: string) => void
  onProcess: (id: string) => void
  onComplete: (id: string) => void
  onRequestApproval: (id: string) => void
}

const ActionMenu: React.FC<ActionMenuProps> = ({
  status,
  id,
  onCancel,
  onProcess,
  onComplete,
  onRequestApproval
}) => {
  const renderMenuItems = () => {
    switch (status) {
      case 'pending':
        return (
          <MenuItem>
            <div className="flex flex-col">
              <button
                onClick={() => onCancel(id)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
              >
                Cancel
              </button>
              <button
                onClick={() => onProcess(id)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
              >
                Processing
              </button>
            </div>
          </MenuItem>
        )
      case 'completed_request_customer':
        return (
          <MenuItem>
            <div className="flex flex-col">
              <button
                onClick={() => onComplete(id)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
              >
                Complete
              </button>
              <button
                onClick={() => onProcess(id)}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
              >
                Processing
              </button>
            </div>
          </MenuItem>
        )
      case 'processing':
        return (
          <MenuItem>
            <button
              onClick={() => onRequestApproval(id)}
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-black/10"
            >
              Completed Request By Vendor
            </button>
          </MenuItem>
        )
      default:
        return null
    }
  }

  return (
    <Menu>
      <MenuButton>
        <EllipsisVerticalIcon className="size-4 fill-black/30" />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-64 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {renderMenuItems()}
      </MenuItems>
    </Menu>
  )
}

export default ActionMenu
