"use client";
import { useState } from "react";
type Props = {};

const BodyMassIndexCalulator = (props: Props) => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBMI] = useState<number>(0);

  const calculateBMI = () => {
    const bmiValue = parseInt(
      (weight / ((height / 100) * (height / 100))).toFixed(2)
    );
    setBMI(bmiValue);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="weight">
          Poids (kg)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="weight"
          type="number"
          placeholder="Entrez votre poids"
          value={weight}
          onChange={(e) => setWeight(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="height">
          Height (cm)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="height"
          type="number"
          placeholder="Entrez votre taille"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-black hover:bg-black/60 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={calculateBMI}
        >
          Calculer BMI
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="bmi">
          Your BMI is :
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bmi"
            type="text"
            readOnly
            value={bmi}
          />
          {bmi > 0 && (
            <p className="font-bold">
              Your BMI is {bmi}.{" "}
              {bmi < 18.5
                ? "You are underweight."
                : bmi < 25
                ? "Your weight is normal."
                : bmi < 30
                ? "You are overweight."
                : "You are obese."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyMassIndexCalulator;
