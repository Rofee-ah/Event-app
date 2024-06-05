import React from 'react'
import Catering from './Catering'
import Mc from './Mc'
import { Navbar } from '@material-tailwind/react'
import ServicesHeader from './ServicesHeader'
import Dj from './Dj'

const   All = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <ServicesHeader/> */}
      <Catering/>
      <Mc/>
      <Dj/>
    </div>
  )
}

export default All