import { ArrowDownIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Avatar from '/public/assets/avatar.jpeg'
import DownloadImg from '/public/assets/download-img.png'

const ChatPanel = () => {
  return (
    <div className={'h-full w-full bg-white'}>
      <ul className="no-scroll flex-1 space-y-6 overflow-y-scroll border-b p-4">
        <li className="flex max-w-xs items-start gap-3">
          <div className="avatar h-[30px] w-[30px] flex-shrink-0 overflow-hidden rounded-full">
            <Image width={30} height={30} src={Avatar} alt="avatar" />
          </div>
          <div>
            <span className="mb-2 block text-xs uppercase text-clr-81">4:02 PM</span>
            <p className="bg-[#F4F6F8] p-3 text-sm text-clr-36">
              Lorem ipsum dolor sit amet consectetur. Amet scelerisque volutpat quis risus elementum.
            </p>
          </div>
        </li>

        <li className="ml-auto max-w-xs">
          <div>
            <span className="mb-2 block text-end text-xs uppercase text-clr-81">4:02 PM</span>
            <p className="bg-[#F2F8FF] p-3 text-sm text-clr-36">
              Lorem ipsum dolor sit amet consectetur. Amet scelerisque volutpat quis risus elementum.
            </p>
          </div>
        </li>

        <li className="flex max-w-xs items-start gap-3">
          <div className="avatar h-[30px] w-[30px] flex-shrink-0 overflow-hidden rounded-full">
            <Image width={30} height={30} src={Avatar} alt="avatar" />
          </div>
          <div>
            <span className="mb-2 block text-xs uppercase text-clr-81">4:02 PM</span>
            <div className="group relative h-[208px] w-[277px] cursor-pointer overflow-hidden rounded-lg">
              <Image width={277} height={208} src={DownloadImg} alt="image" />
              <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-xl bg-slate-600 p-3 group-hover:block">
                <ArrowDownIcon className="size-5 fill-white" />
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="">
        <input type="text" className="w-full rounded p-2" placeholder="Type a message..." />
      </div>
    </div>
  )
}

export default ChatPanel
