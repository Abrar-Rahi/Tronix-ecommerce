import React from 'react'
import Container from '../components/Container'
import Images from '../components/Images'
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"
import icon from "../assets/icon.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import icon6 from "../assets/icon6.png"
import i1 from "../assets/i1.png"
import i2 from "../assets/i2.png"
import i3 from "../assets/i3.png"
import i4 from "../assets/i4.png"
import i5 from "../assets/i5.png"
import i6 from "../assets/i6.png"
import best from "../assets/best.png"
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Product from '../components/Product'
import Product2 from '../components/Product2'
import Product3 from '../components/Product3'
import Button from '../components/Button'
import {BsCartCheckFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Homepage = () => {
    let cart = useSelector(state => state.cart.cartItem)
  return (
    <div>
        <Container>
            {/*banner start*/}
            <section className='py-20 '>
                <Flex className="gap-x-8">
                  <Images src={banner1}/>
                  <Flex className="flex-col gap-y-8">
                    <Images src={banner2}/>
                    <Images src={banner3}/>

                  </Flex>

                </Flex>
            </section>
            {/*banner end*/}


            {/*Category start*/}
            <section className='pb-40'>
                <Heading text="Category"/>
                <Flex className="font-pop font-normal text-24 text-blk justify-between  text-center mt-12">
                    <div className='flex flex-col items-center'>
                        <Images src={icon}/>
                        <p className='w-[154px]  mt-4'>Computer & Laptop</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Images src={icon1}/>
                        <p className='w-[154px] mt-4'>Mobile & Tablet</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Images src={icon2}/>
                        <p  className='mt-4'>Camera</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Images src={icon3}/>
                        <p className='w-[154px] mt-4'>TV & Smart Box</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Images src={icon4}/>
                        <p className='w-[154px] mt-4'>Home Appliance</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Images src={icon5}/>
                        <p className='mt-4'>Accessories</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Images src={icon6}/>
                        <p className='w-[154px] mt-4'>Other Categories</p>
                    </div>
                    
                </Flex>
            </section>
            {/*Category start*/}


            {/*New Arrival start*/}
            <section className='pb-40'>
                <Flex className="items-center justify-between">
                    <Heading text="New Arrival"/>
                    <h6 className='font-pop font-normal text-24 text-reed'>View All</h6>
                </Flex>
                <Flex className="gap-x-8 mt-8">
                    <Product title="New product1" price="100"/>
                    <Product title="New product2" price="600"/>
                    <Product title="New product3" price="900"/>
                </Flex>
            </section>
            {/*New Arrival End*/}


            {/*Flash Sale start*/}
            <section className='pb-40'>
                <Flex className="items-center justify-between">
                    <Heading text="Flash Sale"/>
                    <h6 className='font-pop font-normal text-24 text-reed'>View All</h6>
                </Flex>
                <Flex className="gap-x-8 mt-8">
                    <Product2 title="flash sale 1" price="20"/>
                    <Product2 title="flash sale 2" price="15"/>
                    <Product2 title="flash sale 3" price="10"/>
                </Flex>
            </section>
            {/*Flash Sale End*/}


            {/*SimSong start*/}
            <section className='pb-40'>
                <Container>
                    <Flex className="justify-evenly">
                        <Images src={i1}/>
                        <Images src={i2}/>
                        <Images src={i3}/>
                        <Images src={i4}/>
                        <Images src={i5}/>
                        <Images src={i6}/>
                    </Flex>
                </Container>
            </section>
            {/*SimSong End*/}


            {/*best start*/}
            <section className='pb-40'>
                <Images src={best}/>
            </section>
            {/*best End*/}


            {/*Featured Products start*/}
            <section className='pb-40'>
                <Flex className="gap-x-8">
                    <div className='w-1/4'>
                        <div className='bg-reed rounded-32 pt-12 pl-12 w-full'>
                            <Heading text="Best Collection" className="text-whit"/>
                            <p className='font-pop font-normal text-lg text-whit mt-6 mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <Button className="border-whit bg-reed mb-320"  text="Add To Cart" type="reed"/>
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <Flex className="items-center justify-between mb-9">
                            <Heading text="Featured Products"/>
                            <h6 className='font-pop font-normal text-24 text-reed'>View All</h6>
                        </Flex>
                        <Flex className="gap-x-8" >
                            <Product2 type="t1" title="feature 1" price="19"/>
                            <Product2 type="t1" title="feature 2" price="23"/>
                            <Product2 type="t1" title="feature 3" price="17"/>
                        </Flex>
                    </div>
                    
                </Flex>
            </section>
            {/*Featured Products End*/}



            {/*Top Rated Product start*/}
            <section className='pb-40'>
                <Flex className="items-center justify-between">
                    <Heading text="Top Rated Product"/>
                    <h6 className='font-pop font-normal text-24 text-reed'>View All</h6>
                </Flex>
                <Flex className="gap-x-8 mt-8">
                    <Product3 title="product 1" price="1000"/>
                    <Product3 title="product 2" price="2000"/>
                    <Product3 title="product 3" price="3000"/>
                    <Product3 title="product 4" price="4000"/>
                </Flex>
            </section>
            {/*Top Rated Product End*/}
        </Container>
        <Link to='/cart'>
            <h3 className='flex w-20 h-20 bg-reed  items-center justify-center rounded-xl text-center fixed right-0 top-1/2'>
            <BsCartCheckFill className='text-whit font-pop font-medium text-5xl'/>
            <p className='text-whit font-pop font-medium text-lg'>{cart.length}</p>
            </h3>
        </Link>
    </div>
  )
}

export default Homepage