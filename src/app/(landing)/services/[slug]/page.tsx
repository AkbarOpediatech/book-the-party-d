'use client'
import { useFetchServiceByIdQuery } from '@/redux/features/services/apiSlice'
import { cn, specialPackages } from '@/utils'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import CustomBtn from '../../components/CustomBtn'
import SectionHeading from '../../components/SectionHeading'
import ServiceCard from '../../components/ServiceCard'
import serviceImage from '/public/assets/discover-img.png'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const ServiceSingle = () => {
  const [starRating, setStarRating] = useState(0)
  const [value, onChange] = useState<Value>(new Date())

  //query [slug]

  const params = useParams()
  const { slug } = params

  //TODO: Feching with redux
  const { data: service, isLoading, isError, error } = useFetchServiceByIdQuery(slug as string)
  const fullResponse: any = service

  console.log('Single products', fullResponse)

  if (isLoading) return <div>Loading products...</div>
  if (isError) return <div>Error loading products.</div>

  return (
    <section id="service_single" className="py-20">
      <div className="container max-w-[1440px]">
        <SectionHeading title={slug as string} />
        <div className="mb-6 h-[438px] w-[738px] overflow-hidden rounded-2xl">
          <Image src={serviceImage} width={738} className="object-right-top" alt="service-image" />
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Rating style={{ maxWidth: 120 }} value={starRating} onChange={setStarRating} readOnly={true} />
              <p className="text-xl font-medium text-clr-36">4.8</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-clr-36"></div>
              <p className="text-xl font-medium text-clr-36">1,928 Reviews</p>
            </div>
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-clr-ab/70 px-3 py-1.5 text-base font-medium">
            <BookmarkIcon className="size-5" />
            Save
          </button>
        </div>

        <div className="mb-12">
          <h2 className="mb-5 text-3xl font-medium text-clr-27">
            Starting at: <span className="font-bold text-clr-fb">$421</span>
          </h2>
          <p className="text-lg text-[#444444]">
            Lorem ipsum dolor sit amet consectetur. Faucibus arcu vitae commodo dignissim rhoncus venenatis
            volutpat tempor blandit. Non morbi posuere tellus ut neque mattis felis sem. Suspendisse et
            ultrices sit sit sodales quam proin. Id lectus nunc dolor suspendisse et consectetur eu.
          </p>
        </div>

        <div className="mb-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2">
            <div className="space-y-8">
              <div>
                <h4 className="mb-5 text-2xl font-semibold text-black">Highlights</h4>
                <ul className="list-disc space-y-4">
                  <li className="text-lg text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Volutpat et malesuada in elit varius ut vulputate
                    purus. Diam et adipiscing sit orci velit a augue nullam. Orci arcu sodales nisl nunc risus
                    rhoncus interdum ornare.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-5 text-2xl font-semibold text-black">What’s Included</h4>
                <ul className="list-disc space-y-4">
                  <li className="text-lg text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Volutpat et malesuada in elit varius ut vulputate
                    purus. Diam et adipiscing sit orci velit a augue nullam. Orci arcu sodales nisl nunc risus
                    rhoncus interdum ornare.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-5 text-2xl font-semibold text-black">Additional Information</h4>
                <ul className="list-disc space-y-4">
                  <li className="text-lg text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Volutpat et malesuada in elit varius ut vulputate
                    purus. Diam et adipiscing sit orci velit a augue nullam. Orci arcu sodales nisl nunc risus
                    rhoncus interdum ornare.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="mb-5 text-3xl font-semibold">Select Booking Date</h2>
            <Calendar
              onChange={onChange}
              value={value}
              className="custom-calendar mb-5 w-full rounded-lg shadow-lg"
              navigationLabel={({ date }) => (
                <span className="text-lg font-semibold text-clr-fb">
                  {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
              )}
            />
            <CustomBtn btnName="Book Now" className="w-full" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <SectionHeading title="Related Services" />
          <Link
            href={'/service'}
            className={cn(
              'flex items-center gap-5 rounded-full border border-clr-fb bg-white px-7 py-3 text-base font-bold text-clr-fb'
            )}
          >
            see more
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-4">
          {specialPackages.slice(0, 4).map((items, index) => (
            <div className="col-span-1" key={index}>
              <ServiceCard imgSrc={items.img} title={'Book chair arrangements'} review={10} price={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSingle
