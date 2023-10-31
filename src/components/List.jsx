import React from 'react'

const List = ({className,text}) => {
  return (
    <li className={`font-pop font-normal text-lg text-blk cursor-pointer list-none ${className}`}>{text}</li>
  )
}

export default List