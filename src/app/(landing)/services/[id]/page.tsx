'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const ServiceSingle = () => {
  const [tab, setTab] = useState<number>(0)
  const params = useParams()
  const { id } = params
  return (
    <section id="service_single">
      <div className="container max-w-[1440px]">
        <p>something is better then nothing</p>
      </div>
    </section>
  )
}

export default ServiceSingle
