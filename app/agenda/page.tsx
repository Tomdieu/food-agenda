import FoodTable from '@/components/agenda/FoodTable'
import ChartComponent from '@/components/agenda/charts'
import React from 'react'

type Props = {}

const AgendaPage = (props: Props) => {
  return (
    <div className='p-3  grid grid-cols-1 lg:grid-cols-2 gap-2'>
        <div>
          <h5 className='my-2 py-5 border-b font-bold text-xl'>Food List</h5>
          <FoodTable/>
        </div>
        <div>
          <h5 className='my-2 py-5 border-b font-bold text-xl'>Charts</h5>
          <ChartComponent/>
        </div>
    </div>
  )
}

export default AgendaPage