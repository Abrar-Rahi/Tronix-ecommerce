import React from 'react'

const Badge = ({text,className,type}) => {
  return (
    <div className={`font-pop font-normal text-base text-whit  ${type=="reed" && "bg-reed w-16 h-16 rounded-full flex items-center justify-center " || type=="purple" && "inline-block bg-purpal py-2.5 px-6 rounded-lg " || type=="blue" && "inline-block bg-blu py-2.5 px-6 rounded-lg "}${className}`}>{text}</div>
  )
}

export default Badge