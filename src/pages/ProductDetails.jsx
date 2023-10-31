import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import pr1 from "../assets/pr1.png"
import pr2 from "../assets/pr1.png"
import d1 from "../assets/d1.png"
import d2 from "../assets/d2.png"
import d3 from "../assets/d3.png"
import r1 from "../assets/r1.png"
import {FaAngleLeft,FaAngleRight,FaPlus,FaMinus} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {BsFillHeartFill} from "react-icons/bs"
import Button from '../components/Button'

const ProductDetails = () => {
  return (
    <div>
    <Container>
        {/*Details start*/}
     <section className='py-20'>
        <Flex className="gap-x-[106px] ">
            <div className='w-3/6'>
                <Images src={pr1}/>
                <div className='text-center'>
                    <Flex className="mt-5 gap-x-8 justify-evenly items-center">
                        <div className='w-12 h-12 bg-white rounded-lg drop-shadow-2xl flex items-center justify-center text-reed text-xl'>
                            <FaAngleLeft/>
                        </div>
                        <Images className="w-[138px] h-[138px]" src={pr2}/>
                        <Images className="w-[138px] h-[138px]" src={pr2}/>
                        <Images className="w-[138px] h-[138px]" src={pr2}/>
                        <div className='w-12 h-12 bg-white rounded-lg drop-shadow-2xl flex items-center justify-center text-reed text-xl'>
                            <FaAngleRight/>
                        </div>
                    </Flex>
                </div>
            </div>

            <div className='w-3/6 '>
                <Flex className="items-center gap-x-4">
                  <p className='font-pop font-normal text-xl text-oldG'>Products</p>
                  <FaAngleRight className='text-oldG'/>
                  <p className='font-pop font-normal text-xl text-reed'>Wireless Microphone</p>
                </Flex>
                <Flex className="justify-between items-center mt-8 mb-2">
                    <Flex className="gap-x-4">
                        <p className='font-pop font-medium text-xl text-blk'>5.0</p>
                        <Flex>
                            <AiFillStar className='text-ylo text-24'/>
                            <AiFillStar className='text-ylo text-24'/>
                            <AiFillStar className='text-ylo text-24'/>
                            <AiFillStar className='text-ylo text-24'/>
                            <AiFillStar className='text-ylo text-24'/>
                        </Flex>
                        <p className='font-pop font-medium text-xl text-oldG'>Review (12)</p>
                        <div className='w-px h-6 bg-oldG'></div>
                        <p className='font-pop font-medium text-xl text-oldG'>Sold 99</p>
                    </Flex>
                    <Flex className="gap-x-2 items-center">
                        <BsFillHeartFill className='text-24 text-reed'/>
                        <p className='font-pop font-medium text-xl text-blk'>Add to Wishlist</p>
                    </Flex>
                </Flex>
                <h2 className='font-pop font-normal text-4xl text-blk mt-2 mb-8'>Wireless Microphone</h2>
                <Flex className="gap-x-4 items-center">
                    <h2 className='font-pop font-bold text-4xl text-blk'>$29.00</h2>
                    <p className='font-pop font-normal text-xl text-oldG'>$99.00</p>
                    <h2 className='p-2.5 font-pop font-medium text-xl text-reed border border-solid border-reed rounded-lg'>Save 50%</h2>
                </Flex>
                <Flex className="items-center gap-x-8 mb-8 mt-12">
                    <Flex className="items-center gap-x-4">
                        <Images src={d1}/>
                        <p className='font-pop font-normal text-xl text-blk'>Free Delivery</p>
                    </Flex>
                    <Flex className="items-center gap-x-4">
                        <Images src={d2}/>
                        <p className='font-pop font-normal text-xl text-blk'>Available Voucher</p>
                    </Flex>
                    <Flex className="items-center gap-x-4">
                        <Images src={d3}/>
                        <p className='font-pop font-normal text-xl text-blk'>In Stock</p>
                    </Flex>

                </Flex>
                <div className='w-full h-px bg-oldG mb-8'></div>
                <h6 className='font-pop font-medium text-xl text-blk'>Description</h6>
                <p className='font-pop font-normal text-xl text-oldG mt-4 mb-32'>Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p>
                <Flex className="justify-between">
                    <Flex className=" gap-x-8 items-center">
                        <h5 className='font-pop font-medium text-xl text-oldG'>Quantity</h5>
                        <Flex className="items-center gap-x-6">
                            <div className='p-6 bg-gry rounded-lg flex items-center justify-center text-xl text-blk  hover:bg-reed hover:text-whit'><FaMinus/></div>
                            <h3 className='font-pop font-medium text-xl text-reed'>1</h3>
                            <div className='p-6 bg-gry rounded-lg flex items-center justify-center text-xl text-blk hover:bg-reed hover:text-whit'><FaPlus/></div>
                        </Flex>
                    </Flex>
                    <Flex className="gap-x-2">
                        <Button text="Chat" type="reed"/>
                        <Button text="Add to Cart" type="reed"/>
                    </Flex>
                </Flex>
            </div>
        </Flex>
    </section>  
        {/*Details End*/}



        {/*Review start*/}
    <section className='pb-40'>
        <Flex className="mb-20 gap-x-10">
            <h4 className='font-pop font-medium text-24 text-oldG hover:text-reed cursor-pointer'>Reviews (200)</h4>
            <h4 className='font-pop font-medium text-24 text-oldG hover:text-reed cursor-pointer'>Reviews (200)</h4>
            <h4 className='font-pop font-medium text-24 text-oldG hover:text-reed cursor-pointer'>Discussion</h4>
            <h4 className='font-pop font-medium text-24 text-oldG hover:text-reed cursor-pointer'>Gift Cards</h4>
        </Flex>
        <Flex>
            <div className='w-3/6'>
               <div className='flex flex-col gap-y-8'>
                    <div>
                    <Flex className="gap-x-4">
                        <Images src={r1}/>
                    <div>
                        <h3 className='font-pop font-medium text-xl text-blk'>Vanille</h3>
                            <Flex className="gap-x-4">
                                <p className='font-pop font-medium text-xl text-blk mt-2'>5.0</p>
                                <Flex>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                </Flex>
                                <p className='font-pop font-medium text-xl text-oldG'>1 Month Ago</p>
                            </Flex>
                    </div>
                    </Flex>
                    <p className='font-pop font-normal text-xl text-blk mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div>
                    <Flex className="gap-x-4">
                        <Images src={r1}/>
                    <div>
                        <h3 className='font-pop font-medium text-xl text-blk'>Vanille</h3>
                            <Flex className="gap-x-4">
                                <p className='font-pop font-medium text-xl text-blk mt-2'>5.0</p>
                                <Flex>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                </Flex>
                                <p className='font-pop font-medium text-xl text-oldG'>1 Month Ago</p>
                            </Flex>
                    </div>
                    </Flex>
                    <p className='font-pop font-normal text-xl text-blk mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div>
                    <Flex className="gap-x-4">
                        <Images src={r1}/>
                    <div>
                        <h3 className='font-pop font-medium text-xl text-blk'>Vanille</h3>
                            <Flex className="gap-x-4">
                                <p className='font-pop font-medium text-xl text-blk mt-2'>5.0</p>
                                <Flex>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                </Flex>
                                <p className='font-pop font-medium text-xl text-oldG'>1 Month Ago</p>
                            </Flex>
                    </div>
                    </Flex>
                    <p className='font-pop font-normal text-xl text-blk mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div>
                    <Flex className="gap-x-4">
                        <Images src={r1}/>
                    <div>
                        <h3 className='font-pop font-medium text-xl text-blk'>Vanille</h3>
                            <Flex className="gap-x-4">
                                <p className='font-pop font-medium text-xl text-blk mt-2'>5.0</p>
                                <Flex>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                    <AiFillStar className='text-ylo text-24'/>
                                </Flex>
                                <p className='font-pop font-medium text-xl text-oldG'>1 Month Ago</p>
                            </Flex>
                    </div>
                    </Flex>
                    <p className='font-pop font-normal text-xl text-blk mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
               </div>

            </div>

            <div className='w-px h-[761px] bg-blk ml-10'></div>

            <div className='w-3/6 ml-20'>
                <h3 className='font-pop font-bold text-lg text-blk'>Add Your Review</h3>
                <p className='font-pop font-normal text-xl text-oldG mt-4 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

                <div className='mb-8'>
                    <label className='font-pop font-normal text-xl text-blk '>Name *</label>
                    <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4'/>
                </div>
                <div className='mb-8'>
                    <label className='font-pop font-normal text-xl text-blk '>Email *</label>
                    <input className='w-full border border-solid border-oldG rounded-lg h-16 mt-4'/>
                </div>
                <div className='mb-8'>
                    <label className='font-pop font-normal text-xl text-blk '>Review *</label>
                    <input className='w-full border border-solid border-oldG rounded-lg h-28 mt-10'/>
                </div>
                <Flex className="gap-x-4 mb-16">
                    <p className='font-pop font-medium text-xl text-blk '>Rating</p>
                    <Flex>
                        <AiFillStar className='text-ylo text-24'/>
                        <AiFillStar className='text-ylo text-24'/>
                        <AiFillStar className='text-ylo text-24'/>
                        <AiFillStar className='text-ylo text-24'/>
                        <AiFillStar className='text-gry text-24'/>
                    </Flex>
                </Flex>
                <Button type="reed" text="Submit"/>
            </div>
        </Flex>
    </section>  
        {/*Review End*/}
    </Container>
    </div>
  )
}

export default ProductDetails