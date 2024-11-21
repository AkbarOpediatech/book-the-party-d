import Image from 'next/image'
import avater from '/public/assets/avatar.jpeg'

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="size-8 overflow-hidden rounded-full">
          <Image className="object-cover" src={avater} alt="pic" />
        </div>
        <div>
          <p className="font-inter mb-0.5 font-medium text-gray-900">Admin</p>
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-green-500" />
            <p className="font-inter text-xs font-medium text-green-500">Online</p>
          </div>
        </div>
      </div>

      {/* <Menu>
        <MenuButton>
          <EllipsisVerticalIcon className="size-5" />
        </MenuButton>

        <MenuItems
          anchor="bottom end"
          className={
            'w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-black shadow-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
          }
        >
          <MenuItem>
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
              <WrenchScrewdriverIcon className="size-4 fill-black/30" />
              notification 1
            </div>
          </MenuItem>
          <MenuItem>
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10">
              <ArrowRightEndOnRectangleIcon className="size-4 fill-black/30" />
              notification 2
            </div>
          </MenuItem>
        </MenuItems>
      </Menu> */}
    </div>
  )
}

export default ChatHeader
