import React from 'react'
import header_logo from '../assets/Logo.svg'
import Button from './Button'

const Header = () => {

const menuLIst = [
  {
    title:'About amid',
    link: '#about'
  },
  {
    title: 'Features',
    link: '#features'
  },
  {
    title: 'Portfolio',
    link: '#portfolio'
  },
  {
    title: 'Reviews',
    link: '#reviews'
  } 
]

  return (
    <header className='container mt-10!'>
<nav className='flex space-x-[244px]'>
  <div className='flex items-center space-x-[150px]'>
<img src={header_logo} alt="" />


<ul className='flex items-center space-x-14' >
  {
    menuLIst.map((item , index) =>{
      return(
        <>
        <li key={index}>
          <a className='cursor-pointer' href={item.li}>{item.title}</a>
        </li>

        
        </>
          
      )
    })
  }
</ul>
  </div>


<Button className='bg-[#124F48] text-white py-4 px-10 rounded-4xl' text='Login' />
</nav>

    </header>
  )
}

export default Header