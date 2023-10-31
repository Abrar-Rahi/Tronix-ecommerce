import React from 'react'

const Button = ({text,className,type}) => {
  return (
    <button className={` font-pop font-medium text-base  duration-300 py-4 px-7 border border-solid rounded-lg ease-in ${type=="reed"? "text-whit bg-reed   border-reed   hover:bg-whit hover:text-reed" : "text-whit bg-blk border-blk hover:bg-whit hover:text-blk"} ${className}`}>{text}</button>
  )
}

export default Button