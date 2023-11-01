import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

const NextArrows = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-37% -translate-1/2 right-5 inline-block bg-whit text-blk flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer `}
        // style={{ ...style, display: "inline-block", background: "red" }}
        onClick={onClick}
      >
        <FaLongArrowAltRight/>
      </div>
    );
}

export default NextArrows