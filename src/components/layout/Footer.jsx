import React from 'react'
import Images from '../Images'
import logo from "../../assets/logo.png"
import f from "../../assets/f.png"
import vector from "../../assets/vector.png"
import vector1 from "../../assets/vector1.png"
import vector2 from "../../assets/vector2.png"
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Button from '../Button'
import {FiPhone} from "react-icons/fi"
import {GoMail} from "react-icons/go"
import List from '../List'
import {FaInstagram} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <>
        <div className='bg-reed py-70'>
          <Container>
           <Flex className="justify-evenly items-center relative">
            <Flex className="gap-x-8">
                <Images src={f}/>
                <Flex className="flex-col gap-y-4">
                    <Heading text="Join our newsletter now!" className="text-5xl text-whit"/>
                    <p className='font-pop font-normal text-lg text-whit'>Register now and get our latest updates and promos.</p>
                </Flex>
                </Flex>
                <input className='placeholder:font-pop placeholder:font-normal placeholder:text-lg placeholder:text-olgG w-512 h-70 py-2.5 px-8 bg-whit rounded-lg ' placeholder='Search here'/>
                <Button text="Join" className="absolute top-5 right-32 "/>
           </Flex>
          </Container>
        </div>

    <div className='bg-reed5 py-16'>

        <div className='pt-70 pb-32'>
            <Container>
                <Flex>
                <div className='w-1/2'>
                    <Images src={logo}/>
                    <p className='font-pop font-normal text-lg text-blk w-376 mt-4 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                    <Flex className="gap-x-4 items-center mb-4">
                        <FiPhone className='text-24 text-reed '/>
                        <h5 className='font-pop font-normal text-lg text-blk'>+12 345 6789 0</h5>
                    </Flex>
                    <Flex className="gap-x-4 items-center">
                        <GoMail className='text-24 text-reed '/>
                        <h5 className='font-pop font-normal text-lg text-blk'>support@tronix.com</h5>
                    </Flex>
                </div>
                <div className='w-1/2'>
                    <Flex className="justify-between">
                        <div>
                            <Heading text="Company" className=" text-blk mb-8 text-[24px]"/>
                            
                            <Flex className="flex-col gap-y-4">
                                <List text="About"/>
                                <List text="Product"/>
                                <List text="Blog"/>
                                <List text="Contact"/>
                                <List text="Careers"/>
                            </Flex>
                        </div>
                        <div>
                            <Heading text="Information" className=" text-blk mb-8 text-[24px]"/>
                            
                            <Flex className="flex-col gap-y-4">
                                <List text="Help Center "/>
                                <List text="Payment Methods"/>
                                <List text="Return & Refund"/>
                                <List text="Privacy Policy"/>
                            </Flex>
                        </div>
                        <div>
                        <Heading text="Information" className=" text-blk mb-8 text-[24px]"/>
                            <Flex className="text-whit text-32 gap-x-6">
                                <div className='w-14 h-14 bg-reed rounded-lg flex items-center justify-center'><FaInstagram/></div>
                                <div className='w-14 h-14 bg-reed rounded-lg flex items-center justify-center'><BsTwitter/></div>
                                <div className='w-14 h-14 bg-reed rounded-lg flex items-center justify-center'> <AiFillFacebook/></div>
                            </Flex>
                        </div>
                    </Flex>
                </div>
                </Flex>
                
            </Container>
        </div>
        <Container>
            <div className='w-full h-px bg-oldG'></div>
        <Flex className="justify-between items-center mt-11 ">
            <p className='font-pop font-normal text-sm text-blk'>Copyright © 2021 Tronix. All Right Reseved</p>
            <Flex className="gap-x-4">
                <Images src={vector}/>
                <Images src={vector1}/>
                <Images src={vector2}/>
            </Flex>
        </Flex>
        </Container>
    </div>

</>
  )
}

export default Footer