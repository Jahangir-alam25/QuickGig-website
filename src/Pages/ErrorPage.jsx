import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Link, useRouteError } from 'react-router'





const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>

      <div className='py-24 text-center dark:text-white dark:bg-gray-800 min-h-screen'>
        <Helmet>
          <title>ErrorPage - QuickGig</title>
        </Helmet>
        <h1 className='mb-8 text-7xl font-bold text-red-500'>
          {error?.status || 404}
        </h1>
        <p className='mb-3 text-xl font-bold dark:text-white text-gray-900 md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </p>
        <Link to='/'>
          <button className='bg-[#0EA106] text-white px-4 py-2 rounded'>Go to HomePage</button>
        </Link>
      </div>
    </>
  )
}

export default ErrorPage