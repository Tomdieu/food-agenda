import FoodForm from '@/components/agenda/Food'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col p-2">
        <h5 className='text-md md:text-xl lg:text-3xl font-bold my-2'>Save Food Information</h5>
        <div className='p-3 shadow-lg my-2'>
            <FoodForm/>
        </div>
    </div>
  )
}

export default page