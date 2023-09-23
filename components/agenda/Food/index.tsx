"use client";
import React, { useState } from "react";
import useFoodStore from "@/hooks/useFoodStore";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

type Props = {};

interface FoodFormData {
  name: string;
  category: string;
  calories: string;
  description: string;
}

const FoodForm = (props: Props) => {
  const { addFood } = useFoodStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [foodData, setFoodData] = useState<FoodFormData>({
    name: "",
    category: "",
    calories: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(foodData);
    addFood(foodData);
    setIsLoading(false);
    router.push("/agenda/foods");
  };

  return (
    <div className=" mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Enter the food name"
            value={foodData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            name="category"
            placeholder="Enter the food category"
            value={foodData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="calories"
          >
            Calories
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="calories"
            type="number"
            name="calories"
            placeholder="Enter the food calories"
            value={foodData.calories}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Enter the food description"
            value={foodData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            className="bg-black hover:bg-black/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Food
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FoodForm;
