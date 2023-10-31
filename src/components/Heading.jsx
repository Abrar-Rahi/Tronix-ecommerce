import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h3 className={`font-mon font-bold text-4xl text-blk ${className}`}>{text}</h3>
  )
}

export default Heading