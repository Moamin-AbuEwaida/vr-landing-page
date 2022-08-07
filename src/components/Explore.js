import React from 'react'

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
      <div className='container mx-auto h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h3 className='test-3xl font-semibold mb-8' data-aos='fade-right' data-aos-offset='1100'>Explore product in new way</h3>
          <p className='max-w-xs mb-12' data-aos='fade-right' data-aos-offset='1300'>lor lkdf ldsaf lk mnv lkjfi piwqu pdc ,.vxzcn uwer asdf wer ds vvasd lpqwu c9u93f cxjc'kjsdaf  9ur ip hljhsa lksdfj m q-j `k ` f</p>
          <form className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0' data-aos='fade-up' data-aos-offset='200'>
            <input className='bg-gradient-to-t from-[#341d38] to-[#271223] h-12 px-4 outline-none rounded-md' type='text' placeholder='Your Email'/>
            <button className='btn'>Start</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Explore