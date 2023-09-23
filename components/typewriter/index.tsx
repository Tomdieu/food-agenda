"use client";

import Typewriter from "typewriter-effect";

const TypeWriter = () => {
 

  return (
    <div>
      <Typewriter
        options={{
          strings:  ["Save Your Daily Food Comsumption", "Calculate Your BMI", "Calculer Les Calorie"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeWriter;
