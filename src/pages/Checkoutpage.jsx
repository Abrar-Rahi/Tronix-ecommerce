import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Checkoutpage = () => {

    let cart = useSelector(state => state.cart.cartItem)
    let [subTotal,setSubTotal]= useState(0)
    useEffect(()=>{
        let total=0
        cart.map(item=>{
            total += item.price * item.quantity
        })
        setSubTotal(total)
    },[cart])

  return (
    <div className='py-40'>
        <Container>
        <Heading text="My Cart" className="text-5xl mt-20 mb-20 text-center"/>
        <Flex className="items-center gap-x-16 justify-center mb-20">
            <Flex className="gap-x-6 items-center">
                <div className='font-pop font-medium text-24 text-reed flex items-center justify-center bg-transfarent border border-solid border-reed rounded-full w-14 h-14'>1</div>
                <h6 className='font-pop font-medium text-24 text-reed'>My Cart</h6>
            </Flex>

            <div className='w-[304px] h-px bg-blk'></div>

            <Flex className="gap-x-6 items-center">
                <div className='font-pop font-medium text-24 text-reed flex items-center justify-center bg-transfarent border border-solid border-reed rounded-full w-14 h-14'>2</div>
                <h6 className='font-pop font-medium text-24 text-reed'>Checkout</h6>
            </Flex>
        </Flex>
        
        <Flex className="gap-x-8">
            <div className='w-2/3'>
                <h6 className='font-pop font-medium text-24 text-blk'>Buyer Info</h6>
                <div className='w-full h-px bg-blk my-8'></div>
                <Flex className="gap-x-8">
                    <div className='w-1/2'>
                        <label className='font-pop font-normal text-xl text-blk '>First Name</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4 mb-8'/>

                        <label className='font-pop font-normal text-xl text-blk '>Address</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4 mb-8'/>

                        <label className='font-pop font-normal text-xl text-blk '>Country</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4 mb-8'/>

                        <label className='font-pop font-normal text-xl text-blk '>State</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4 mb-8'/>
                    </div>

                    <div className='w-1/2'>
                        <label className='font-pop font-normal text-xl text-blk '>Last Name</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4 mb-8'/>

                        <label className='font-pop font-normal text-xl text-blk '>Contact</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4 mb-8'/>

                        <label className='font-pop font-normal text-xl text-blk '>City</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4 mb-8'/>

                        <label className='font-pop font-normal text-xl text-blk '>Zip Code</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4 mb-8'/>
                    </div>
                </Flex>
                        <label className='font-pop font-normal text-xl text-blk '>Note</label>
                        <input className='w-full border border-solid border-oldG rounded-lg h-32 mt-4'/>
            </div>

            <div className='w-1/3 border border-solid border-blk py-8 px-6 rounded-lg'>
              <h4 className='font-pop font-semibold text-24 text-blk text-center mb-12'>Your Order Summary</h4>
              {cart.map(item=>(

              <Flex className="justify-between font-pop font-medium text-lg text-blk mb-6">
                <Flex className="gap-x-8">
                    <p>{item.quantity}x</p>
                    <p>{item.title}</p>
                </Flex>
                <div> {item.price}$</div>
              </Flex>
              ))}
              <div className='w-full h-px bg-blk mt-2 mb-8'></div>

              <Flex className="justify-between font-pop font-medium text-lg text-blk mb-6">
                <p>SubTotal</p>
                <div> {subTotal}$</div>
              </Flex>

              <Flex className="justify-between font-pop font-medium text-lg text-blk mb-6">
                <p>Shipping</p>
                <div> 15$</div>
              </Flex>

              <Flex className="justify-between font-pop font-medium text-lg text-blk mb-6">
                <p>Tax</p>
                <div> 10$</div>
              </Flex>

              <div className='w-full h-px bg-blk mt-8 mb-8'></div>

              <Flex className="justify-between font-pop font-medium text-24 mb-6">
                <p className='text-blk'>Total</p>
                <div className='text-reed'>{subTotal+15+10}$</div>
              </Flex>

              <div className='w-full h-px bg-blk mt-8 mb-8'></div>

              <h2 className='font-pop font-semibold text-24 text-blk'>Payment</h2>
              <Flex className="gap-x-4 mt-8 mb-14">
                <Button text="Credit Card"/>
                <Button text="Bank Transfer"/>
                <Button text="Paypal"/>
              </Flex>

              <Button type="reed" text="Checkout" className="w-full mb-8"/>
              <Link to="/cart">
                <p className='font-pop font-medium text-18 text-blk text-center'>Bact To Cart</p>
              </Link>


            </div>
        </Flex>
        </Container>
    </div>
  )
}

export default Checkoutpage