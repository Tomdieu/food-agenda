"use client"
import useFoodStore from '@/hooks/useFoodStore';
import React, { useEffect } from 'react';

function FoodTable() {
  const { foods, getFoods } = useFoodStore();

  useEffect(() => {
    getFoods();
  }, [getFoods]);

  return (
    <div className="bg-white rounded my-6 w-full">
      <table className="w-full table-auto overflow-x-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-center">Calories</th>
            <th className="py-3 px-6 text-center">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {foods.map((food) => (
            <tr key={food.name} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{food.name}</td>
              <td className="py-3 px-6 text-left">{food.category}</td>
              <td className="py-3 px-6 text-center">{food.calories}</td>
              <td className="py-3 px-6 text-center">{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
