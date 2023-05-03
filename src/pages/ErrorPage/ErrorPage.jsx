import React from 'react'
import { Link} from 'react-router-dom'
import error from '../../../public/error.jpg'

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img src={error} alt="error" className='rounded-full w-40' />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
            <span className='sr-only'>Error</span>
            404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
          No route matches 
          </p>
          <Link to='/' className='btn btn-secondary'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage