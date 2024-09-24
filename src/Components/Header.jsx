import React from 'react'
import logo from '../assets/images/logo.png'
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <nav className='container px-3 py-5 flex justify-between rounded-md bg-inherit'>
                    {/* logo */}
                    <div className='flex mt-2 ml-3'>
                        <img src={logo} className='h-7' />
                        <h5 className='logoH font-semibold text-black'>Urban Store</h5>
                    </div>

                    {/* home buttons */}
                    <div className='flex gap-5 mt-2'>
                        <Link to={'/'} className='text-white rounded-3xl w-[80px] border-b-2 bg-black drop-shadow-lg text-[13px] h-[50px] text-center py-3'>HOME</Link>
                        <Link to={'/products'}  className='text-black rounded-3xl w-[80px] border-b-2 bg-white shadow-md text-[13px] h-[50px] text-center py-3'>PRODUCTS</Link>
                        <Link  className='text-black rounded-3xl w-[80px] border-b-2 bg-white shadow-md text-[13px] h-[50px] text-center py-3'>ABOUT</Link>
                        <Link  className='text-black rounded-3xl w-[80px] border-b-2 bg-white shadow-md text-[13px] h-[50px] text-center py-3'>SUPPORT</Link>
                        <Link to={'/cart'} className='text-black rounded-3xl w-[50px] border-b-2 bg-white shadow-md text-[13px] px-3 h-[50px] text-center py-3'><BsCartCheckFill className='text-2xl'/> </Link>
                    </div>
                </nav>


            </header>
        </>
    )
}

export default Header