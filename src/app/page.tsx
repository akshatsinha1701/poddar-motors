import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Offers from '@/components/Offers'
import '@/styles/tailwind.css'
import ServiceCarousel from '@/components/ServiceCarousel'


export default function Home() {
  return (
    <>
      <Navbar />
      <ServiceCarousel />
    </>

  )
}
