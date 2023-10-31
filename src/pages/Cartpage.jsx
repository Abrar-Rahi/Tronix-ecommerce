import React, { useEffect, useState } from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Images from '../components/Images'
import cupon from "../assets/cupon.png"
import {FaPlus,FaMinus,FaTimes,FaAngleRight} from "react-icons/fa"

import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,remove } from '../slices/cartslice'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Heading from '../components/Heading'

const Cartpage = () => {
   
    let dispatch = useDispatch()

    let cart = useSelector(state => state.cart.cartItem)

    let [subTotal,setSubTotal] = useState(0)
    
    useEffect(()=>{
        let total = 0
        cart.map(item =>{
            total += item.price * item.quantity
        })
        setSubTotal(total)

    },[cart])

  return (
    <div>
    <Container>
        <Heading text="My Cart" className="text-5xl mt-20 mb-20 text-center"/>
        <Flex className="items-center gap-x-16 justify-center">
            <Flex className="gap-x-6 items-center">
                <div className='font-pop font-medium text-24 text-reed flex items-center justify-center bg-transfarent border border-solid border-reed rounded-full w-14 h-14'>1</div>
                <h6 className='font-pop font-medium text-24 text-reed'>My Cart</h6>
            </Flex>

            <div className='w-[304px] h-px bg-blk'></div>

            <Flex className="gap-x-6 items-center">
                <div className='font-pop font-medium text-24 text-gry flex items-center justify-center bg-transfarent border border-solid border-gry rounded-full w-14 h-14'>2</div>
                <h6 className='font-pop font-medium text-24 text-gry'>Checkout</h6>
            </Flex>
        </Flex>
        <Flex className="gap-x-[104px] mt-20 pb-40">
            <div className='w-2/3'>
            {cart.map(item=>(
                        <>
                        
                        
                <Flex className="items-center border-y border-solid border-reed py-10 ">
                    <div className='w-2/6'>
                        <Images className="w-[180px] h-[180px]" src={item.image}/>
                    </div>
                    <div className='w-3/6'>
                      
                        <h6 className='font-pop font-normal text-24 text-blk'>{item.title}</h6>
                        <p className='font-pop font-normal text-24 text-reed mt-4 mb-12'>{item.price}$</p>
                        <Flex className="items-center gap-x-6">
                            <div onClick={()=> dispatch(decrease(item))} className='p-6 bg-gry rounded-lg flex items-center justify-center text-xl text-blk  hover:bg-reed hover:text-whit'><FaMinus/></div>
                            <h3 className='font-pop font-medium text-xl text-reed'>{item.quantity}</h3>
                            <div onClick={()=> dispatch(increase(item))} className='p-6 bg-gry rounded-lg flex items-center justify-center text-xl text-blk hover:bg-reed hover:text-whit'><FaPlus/></div>
                        </Flex>
                    </div>
                    <div onClick={()=> dispatch(remove(item))} className=' text-reed text-xl w-2/6 flex justify-end cursor-pointer hover:text-2xl duration-300'>
                        <FaTimes/>
                    </div>

                </Flex>
                </>
                ))}
            </div>
            <div className='w-1/3'>
                <div className='border border-solid border-reed py-6 pl-20 rounded-2xl bg-cupon mt-8'>
                    <Flex className="items-center gap-x-6">
                        <div className='h-14 w-14 rounded-xl bg-reed flex items-center justify-center'>
                            <Images src={cupon}/>
                        </div>
                        <h5 className='font-pop font-medium text-xl text-blk'>Have a coupon code?</h5>
                        <FaAngleRight/>
                    </Flex>
                </div>
                <div className='p-8 border border-solid border-reed rounded-2xl mt-8'>
                    <h6 className='font-pop font-medium text-24 text-blk'>Summary</h6>
                    <Flex className="items-center justify-between mt-8 mb-12">
                        <p className='font-pop font-medium text-xl text-oldG'>Total</p>
                        <p className='font-pop font-medium text-xl text-reed'>{subTotal}$</p>
                    </Flex>
                    <Link to="/checkout">
                      <Button className="w-full mb-8" text="Checkout" type="reed"/>
                    </Link>
                    <Link to="/">
                       <p className='font-pop font-medium text-xl text-reed text-center'>Continue Shopping</p>
                    </Link>
                </div>
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Cartpage