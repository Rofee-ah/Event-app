import { Navbar } from '@material-tailwind/react'
import React from 'react'
import NavBar from '../components/NavBar'
import Dancer from '../components/Dancer'
import ServicesHeader from '../components/ServicesHeader'

const DancerPage = () => {
  return (
    <div>
        <NavBar/>
        <ServicesHeader/>
        <Dancer/>
    </div>
  )
}

export default DancerPage