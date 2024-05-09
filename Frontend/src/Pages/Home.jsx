import Footer from 'Components/Footer/Footer'
import React from 'react'
import Logo from 'Assets/Images/logo-color.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-20 h-[100vh]'>
        
        <div className=' h-48 w-48'>
           <img className='w-full h-full' alt="logo" src={Logo} />      
        </div>

        <div className='flex justify-around items-center gap-13'>
            <div className='w-1/2 text-center font-semibold basis-1/2'>
                <h1 className='text-white text-5xl tracking-widest leading-tight'>
                    BookShelf <br />
                    <span className=' text-warning'>Your personal library and social network for bookworms</span>
                </h1>
            </div>

            <div className=' mr-20'>
              <Link to="/register">
                <button className='btn btn-primary rounded-md px-3 py-1 text-2xl px-5 py-2'>
                  REGISTER
                </button>
              </Link>
              <Link to="/login">
                <button className='btn btn-warning mx-3 rounded-md px-3 py-1 text-2xl px-5 py-2'>
                  LOGIN
                </button>
              </Link>
            </div>

        </div>

    </div>
  )
}

export default Home
