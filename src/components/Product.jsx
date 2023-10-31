import React from 'react'
import Images from './Images'
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import Flex from './Flex'
import Badge from './Badge'
import {AiFillStar} from "react-icons/ai"
import Button from './Button'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../slices/cartslice'

const Product = ({title,price}) => {

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
    <Flex className='w-512 rounded-xl border border-solid border-oldG'>
        <div className='w-46 relative'>
            <Images src={p1} className="-z-10 -ml-px" />
            <Badge text="NEW" type="reed" className="absolute top-5 left-5"/>
        </div>
        <div className='w-56 flex flex-col items-center justify-center gap-y-2'>
            <h6 className='font-pop font-normal text-24 text-blk'>{title}</h6>
            <h5 className='font-pop font-bold text-24 text-blk'>{price}$</h5>
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
            <div onClick={handleCart}>
               <Button className="mt-6" text="Add To Cart" type="reed"/>
            </div>
        </div>
    </Flex>
  )
}

export default Product