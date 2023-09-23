"use client";

import BodyMassIndexCalulator from "@/components/agenda/bmi";
import React from "react";

type Props = {};

const BmiPage = (props: Props) => {
  
  return (
    <div className="flex-1 flex gap-2 p-3 flex-col justify-center">
      <h5 className="text-md md:text-xl lg:text-3xl font-bold">Calculate Your BMI</h5>
      
      <div className="shadow-lg p-3">
        <BodyMassIndexCalulator/>
      </div>
    </div>
  );
};

export default BmiPage;
