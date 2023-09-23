import FoodTable from '@/components/agenda/FoodTable';
import { Button } from '@/components/ui/button';
import { FiPlus } from 'react-icons/fi';
import React from 'react';
import Link from 'next/link';

type Props = {};

const FoodListPage = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col p-2">
      <div className="flex items-center justify-between">
        <h5 className="text-md md:text-xl lg:text-3xl font-bold my-2">Food List</h5>
        <Link href={"/agenda/add-food"}>
        <Button className="rounded-full bg-black hover:bg-black/80 active:bg-gray-500 text-white font-bold py-2 px-4 flex items-center justify-center">
          <FiPlus className="mr-2" />
          Add Food
        </Button>
        </Link>
      </div>
      <div className="p-3 shadow-lg my-2">
        <FoodTable />
      </div>
    </div>
  );
};

export default FoodListPage;
