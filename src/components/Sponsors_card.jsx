import React from 'react'

const Sponsors_card = ({img}) => {
  return (
    <section className=''>

    <div className='bg-[#F1FAF9] py-3 px-8 w-[255px] h-[103px] rounded-xl flex items-center text-center justify-center'>
        <img src={img} alt="" />
     </div>

    </section>
  )
}

export default Sponsors_card