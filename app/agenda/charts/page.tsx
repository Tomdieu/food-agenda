import ChartComponent from '@/components/agenda/charts'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col gap-2 p-2'>
        <h5 className='text-xl font-bold'>Chats Of Food Againts Calorie</h5>
        <div className='w-full'>
            <ChartComponent/>
        </div>
    </div>
  )
}

export default page