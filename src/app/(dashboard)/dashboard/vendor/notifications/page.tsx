import Image from 'next/image'
import avater from '/public/assets/avatar.jpeg'
const Notifications = () => {
  return (
    <div>
      <p className="mb-4 text-[22px] font-semibold text-clr-36">Notifications</p>
      <div className="flex flex-col gap-4">
        <p className="text-xl text-gray-500">Today</p>

        {[1, 2, 3, 4, 5].map((data, index) => (
          <div key={index}>
            <div>
              <div className="size-11 overflow-hidden rounded-full">
                <Image className="object-cover" src={avater} alt="pic" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications
