"use client"
import Link from 'next/link';
import React, { useState } from 'react';

import { FiArrowRight } from 'react-icons/fi';

function LandingPage() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [foods, setFoods] = useState([]);

  function calculateBmi() {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  }

  function addFood(food) {
    setFoods([...foods, food]);
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">BMI Tracker</h1>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Calculate your BMI</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateBmi();
            }}
          >
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="weight">
                Weight (kg)
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="height">
                Height (cm)
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Calculate BMI
            </button>
          </form>
          <div className="mt-4">
            {bmi > 0 && (
              <p className="font-bold">
                Your BMI is {bmi}.{' '}
                {bmi < 18.5
                  ? 'You are underweight.'
                  : bmi < 25
                  ? 'Your weight is normal.'
                  : bmi < 30
                  ? 'You are overweight.'
                  : 'You are obese.'}
              </p>
            )}
          </div>
          <div className="mt-8">
            <Link
              href="#"
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Track your food intake{' '}
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} BMI Tracker
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
