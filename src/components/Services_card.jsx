import React from 'react'
import Button from './Button'
import right_arr from '../assets/right_arr.png'

const Services_card = ({text, descrip , className, img ,style , btn , btn_style}) => {
  return (
    <div className={className}>
        <div className='max-w-[280px] mx-auto space-y-10'>
        <div className={style}>
        <img src={img} alt="" />
        </div>
        <span className= 'text-[#021D1A] font-bold text-2xl'>{text}</span>
        <p className='w-[290px]'>{descrip}</p>
             <div className='flex items-center space-x-3.5'>
             <Button className={btn_style} text={btn}/>
             <img src={right_arr} alt="" />

             </div>
        </div>
        

    </div>
  )
}

export default Services_card