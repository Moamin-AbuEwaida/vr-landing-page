import React from 'react'
import { BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto' data-aos='fade-up' data-aos-duration='2000' data-aos-delay='900'>
        <div className='flex items-center justify-between p-8 '>
            <h2>Copyright&reg; LIGHT</h2>
            <div className='flex flex-row gap-x-4 text-xl'>
                <BsFacebook className='hover:cursor-pointer' />
                <BsTwitter className='hover:cursor-pointer' />
                <BsGithub className='hover:cursor-pointer' />

            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


