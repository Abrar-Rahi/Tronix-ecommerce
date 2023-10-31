import React from 'react'
import p2 from "../assets/p2.png"
import Images from './Images'
import Flex from './Flex'
import {AiFillStar} from "react-icons/ai"
import {BsFillHeartFill} from "react-icons/bs"
import Button from './Button'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../slices/cartslice'
import { Link } from 'react-router-dom'


const Product3 = ({title,price,}) => {

  let dispatch = useDispatch()

  let handleCart = ()=>{
     dispatch(AddToCart({
        title : title,
        price : price,
        image : p2,
        quantity : 1
     }))
  }
  return (
    <div className='w-376 p-8 rounded-xl border border-solid border-oldG'>
         <Images src={p2} className="rounded-xl"/>
         <div className='mt-8 flex flex-col gap-y-2 items-center justify-center'>
            <h6 className='font-pop font-normal text-24 text-blk'>{title}</h6>
            <Flex className="gap-x-2">
               <h5 className='font-pop font-medium text-24 text-reed'>{price}</h5>
            </Flex>
            <Flex className="gap-x-4 items-center">
                <Flex className="gap-x-2 items-center">
                <AiFillStar className='text-ylo text-24'/>
                  <p className='font-pop font-normal text-xl text-oldG'>5.0</p>
                </Flex>
                <div className='w-px h-6 bg-oldG'></div>
                <Flex>
                  <p className='font-pop font-normal text-xl text-oldG'>Sold 99</p>
                </Flex>
            </Flex>
            <Flex className="gap-x-7 items-center mt-6">
              
                 <div onClick={handleCart}>
                   <Button  type="reed" text="Add To Cart"/>
                 </div>
              
                <BsFillHeartFill className='text-24 text-gry'/>
            </Flex>
           
        </div>
    </div>
  )
}

export default Product3