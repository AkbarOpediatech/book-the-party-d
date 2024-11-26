import Image from 'next/image'
import avatar from '/public/assets/avatar.jpeg'

function ChatSidebar() {
  return (
    <div className="p-5">
      <input
        className="mb-3 h-10 w-full rounded-lg border border-clr-ab/30 bg-icon-search bg-no-repeat px-3 py-2 pl-10"
        placeholder="Search Contact…"
        style={{ backgroundPosition: 'left 12px center' }}
      />
      <ul>
        <li className="flex cursor-pointer items-center gap-4 py-3">
          <div className="relative">
            <div className="h-11 w-11 overflow-hidden rounded-full">
              <Image width={44} height={44} src={avatar} alt="avatar" />
            </div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-clr-16"></div>
          </div>

          <div className="w-full max-w-[150px]">
            <p className="flex w-full justify-between text-sm font-semibold text-clr-36">
              Rodger Struck <span className="text-xs text-clr-ab">3 days</span>
            </p>
            <p className="truncate text-sm font-semibold text-clr-36">
              How To Boost Traffic How To Boost Traffic How To Boost Traffic{' '}
            </p>
          </div>
        </li>

        <li className="flex cursor-pointer items-center gap-4 py-3">
          <div className="h-11 w-11 overflow-hidden rounded-full">
            <Image width={44} height={44} src={avatar} alt="avatar" />
          </div>

          <div className="w-full max-w-[150px]">
            <p className="flex w-full justify-between text-sm font-semibold text-clr-36">
              Rodger Struck <span className="text-xs text-clr-ab">3 days</span>
            </p>
            <p className="truncate text-sm text-clr-36">
              You: How To Boost Traffic How To Boost Traffic How To Boost Traffic{' '}
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ChatSidebar
