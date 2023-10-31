import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Images from '../components/Images'
import about from "../assets/about.png"
import q1 from "../assets/q1.png"
import q2 from "../assets/q2.png"
import q3 from "../assets/q3.png"
import q4 from "../assets/q4.png"
import team from "../assets/team.png"
import Flex from '../components/Flex'

const Aboutpage = () => {
  return (
    <div>
        <Container>
            <div className='text-center mt-32 mb-20'>
              <Heading text="About Tronix" className="text-5xl"/>
              <p className='w-[838px] mx-auto font-pop font-normal text-lg text-blk mt-8'>We are here to provide a place special for electronic devices. Although we only operated for 2 years but we always provide the best service for customers and all the sellers who use our website. With the hope that it can help improve a better life using various electronic goods with the latest technology, we are all ears to any suggestion from our dear customers</p>
            </div>
              <Images src={about}/>
            <div className='py-40'>
             <Heading text="Why Choosing Us" className="text-5xl text-center mb-20"/>
             <Flex className="justify-between">
               <div className='flex flex-col items-center justify-center'>
                 <Images src={q1}/>
                 <h4 className='font-pop font-medium text-24 text-blk mt-8 mb-2'>54 Brands</h4>
                 <p className='font-pop font-normal text-lg text-oldG text-center w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
               </div>
               <div className='flex flex-col items-center justify-center'>
                 <Images src={q2}/>
                 <h4 className='font-pop font-medium text-24 text-blk mt-8 mb-2'>Fast Delivery</h4>
                 <p className='font-pop font-normal text-lg text-oldG text-center w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
               </div>
               <div className='flex flex-col items-center justify-center'>
                 <Images src={q3}/>
                 <h4 className='font-pop font-medium text-24 text-blk mt-8 mb-2'>COD Service</h4>
                 <p className='font-pop font-normal text-lg text-oldG text-center w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
               </div>
               <div className='flex flex-col items-center justify-center'>
                 <Images src={q4}/>
                 <h4 className='font-pop font-medium text-24 text-blk mt-8 mb-2'>100% Original Products</h4>
                 <p className='font-pop font-normal text-lg text-oldG text-center w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
               </div>
             </Flex>

            </div>

            <div className='pb-40'>
              <div className='text-center'>
                <Heading text="Our Team" className="text-5xl text-center mb-2"/>
                <p className='font-pop font-normal text-lg text-oldG w-[626px] mx-auto mt-8 mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
              </div>
              <Flex className="gap-x-8">
                <div className='drop-shadow-2xl '>
                  <Images src={team}/>
                  <div className='bg-white text-center rounded-2xl py-8'>
                     <h4 className='font-pop font-medium text-24 text-blk mb-2'>Abrar Rahi</h4>
                     <p className='font-pop font-normal text-lg text-oldG'>Team Member</p>
                  </div>
                </div>
                <div className='drop-shadow-2xl '>
                  <Images src={team}/>
                  <div className='bg-white text-center rounded-2xl py-8'>
                     <h4 className='font-pop font-medium text-24 text-blk mb-2'>Ibne Alam</h4>
                     <p className='font-pop font-normal text-lg text-oldG'>Team Member</p>
                  </div>
                </div>
                <div className='drop-shadow-2xl '>
                  <Images src={team}/>
                  <div className='bg-white text-center rounded-2xl py-8'>
                     <h4 className='font-pop font-medium text-24 text-blk mb-2'>Sihan Siraji</h4>
                     <p className='font-pop font-normal text-lg text-oldG'>Team Member</p>
                  </div>
                </div>
                <div className='drop-shadow-2xl '>
                  <Images src={team}/>
                  <div className='bg-white text-center rounded-2xl py-8'>
                     <h4 className='font-pop font-medium text-24 text-blk mb-2'>Mahmudul Hasan</h4>
                     <p className='font-pop font-normal text-lg text-oldG'>Team Member</p>
                  </div>
                </div>
              </Flex>
            </div>
    

        </Container>
    </div>
  )
}

export default Aboutpage