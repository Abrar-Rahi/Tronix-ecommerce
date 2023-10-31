import React from 'react'
import Flex from '../Flex'
import {FaInstagram} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import {BsTwitter,BsLinkedin} from "react-icons/bs"
import {FiPhone} from "react-icons/fi"
import {GoMail} from "react-icons/go"
import {MdManageAccounts} from "react-icons/md"
import {BiSearch,BiShoppingBag} from "react-icons/bi"
import {FiMail} from "react-icons/fi"
import Images from '../Images'
import logo from "../../assets/logo.png"
import List from '../List'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    let cart = useSelector(state => state.cart.cartItem)
  return (
    <>
     {/*Information Section start*/}
     <Container>
        <section>
            <Flex className="justify-between items-center py-4">
                <Flex className="text-24 text-oldG gap-x-8">
                <FaInstagram/>
                <AiFillFacebook/>
                <BsTwitter/>
                <BsLinkedin/>
                </Flex>
                <Flex className="gap-x-8">
                    <Flex className="gap-x-4 items-center">
                        <FiPhone className='text-24 text-reed '/>
                        <h5 className='font-pop font-normal text-lg text-blk'>+12 345 6789 0</h5>
                    </Flex>
                    <Flex className="gap-x-4 items-center">
                        <GoMail className='text-24 text-reed '/>
                        <h5 className='font-pop font-normal text-lg text-blk'>support@tronix.com</h5>
                    </Flex>
                    <Flex className="gap-x-4 items-center">
                        <MdManageAccounts className='text-24 text-reed '/>
                        <h5 className='font-pop font-normal text-lg text-blk'>Account</h5>
                    </Flex>
                </Flex>
            </Flex>
                <div className='w-full h-px bg-oldG'></div>
        </section>
    </Container>
    {/*Information Section end*/}



    {/*Navbar section start*/}
    <Container>
        <section>
            <Flex className="mt-8 items-center">
                <div className='w-2/12'>
                    <Images src={logo}/>
                </div>
                <div className='w-5/12'>
                    <Flex className="gap-x-12">
                    <Link to="/">
                        <List text="Home"/>
                    </Link>
                    <Link to="/about">
                        <List text="About"/>
                    </Link>
                    <Link to="/productdetails">
                        <List text="Product"/>
                    </Link>
                        <List text="Blog"/>
                        <List text="Contact"/>
                    </Flex>
                </div>
                <div className='w-5/12 relative'>
                    <input className='placeholder:font-pop placeholder:font-normal placeholder:text-lg placeholder:text-olgG w-544 py-2.5 px-8 bg-input rounded-lg relative' placeholder='Search here'/>
                    <div className='w-43 h-43 bg-reed rounded-r-lg flex items-center justify-center absolute top-0 right-70'>
                    <BiSearch className='text-24 text-whit'/>
                    </div>
                </div>
                <div className='w-1/12'>
                    <div className='relative'>
                        <Flex className="gap-x-8 justify-end">
                            <div className='w-6 h-6 rounded-full bg-reed font-pop font-normal text-xs text-whit flex items-center justify-center absolute -top-3 right-12'>{cart.length}</div>
                            <Link to="/cart">
                             <BiShoppingBag className='text-3xl'/>
                            </Link>
                            <FiMail className='text-3xl'/>
                        </Flex>
                    </div>
                </div>
            </Flex>
        </section>
    </Container>
    {/*Navbar section end*/}
    </>
  )
}

export default Navbar