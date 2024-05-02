import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MainSection from '../Components/MainSection/MainSection'
import Categories from '../Components/Categories/Categories'
import DModel from '../Components/DModel/DModel'
import Pricing from '../Components/Pricing/Pricing'
import Dentist from '../Components/Dentist/Dentist'
import Reviews from '../Components/Reviews/Reviews'
import Frequently from '../Components/Frequently/Frequently'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
    <MainSection />
    <Categories />
    <DModel />
    <Pricing />
    <Dentist/>
    <Reviews/>
    <Frequently/>
    <Footer/>

    </div>
  )
}
