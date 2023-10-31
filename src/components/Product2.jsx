import React from 'react'
import Images from './Images'
import p2 from "../assets/p2.png"
import Badge from './Badge'
import Flex from './Flex'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../slices/cartslice'

const Product2 = ({type,title,price}) => {
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
    <div className= {` ${type=="t1"?"w-376 rounded-b-xl relative border border-solid border-oldG":"w-512 relative rounded-xl border border-solid border-oldG"} `} >
        
        {type=="t1" ?
         <>
         <Images src={p2}  />
         <Badge type="blue" text="NEW" className="absolute top-5 right-5"/>
         <Badge type="purple" text="10% OFF" className="absolute top-20 right-5"/>
         </>
         :
        <>
         <Images src={p2} className="rounded-xl"/>
         <Badge text="25% OFF" type="purple" className="absolute top-5 right-5"/>
         
        </>
        }

        <div className='mt-8 flex flex-col gap-y-2 items-center justify-center'>
            <h6 className='font-pop font-normal text-24 text-blk'>{title}</h6>
            <Flex className="gap-x-2">
               <h5 className='font-pop font-medium text-24 text-oldG relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-oldG after:w-full after:h-px'>$29.99</h5>
               <h5 className='font-pop font-medium text-24 text-reed'>-</h5>
               <h5 className='font-pop font-medium text-24 text-reed'>{price}$</h5>
            </Flex>
            {type == "t1" ?
            <div onClick={handleCart}>
              <Button className="mt-6 mb-10" text="Add To Cart" type="reed"/>
            </div>
              :

            <div className='w-312 mt-6 mb-10'>
                <Flex className="justify-between">
                <h6 className='font-pop font-normal text-xl text-blk'>Available: 10 </h6>
                <h6 className='font-pop font-normal text-xl text-blk'>Sold: 5 </h6>
                </Flex>
                <div className='w-full h-4 bg-gry rounded'>
                    <div className='w-1/2 h-4 bg-reed rounded'></div>
                </div>

                <div onClick={handleCart} className='text-center'>
                <Button className="mt-6" text="Add To Cart" type="reed"/>
                </div>
            </div>
              }
        </div>
    </div>
  )
}

export default Product2