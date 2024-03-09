import React from 'react'
import SideBar from '../components/SideBar'
import Container from '../components/Container'

const Home = () => {
  return (
    <Container>
    <div className='grid grid-cols-4'>
      <SideBar/>
      <div className=' col-span-3'> thsis is the main part
      </div>
    </div>
    </Container>
  )
}

export default Home
