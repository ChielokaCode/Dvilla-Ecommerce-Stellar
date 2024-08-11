import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import NavBar from '@/components/navbar/NavBar'
import type { NextPage } from 'next'
import 'twin.macro'

const HomePage: NextPage = () => {
  return (
    <>
       <NavBar/>
       <Hero/>
       <Footer/>
    </>
  )
}

export default HomePage
