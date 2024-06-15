
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  useHeightValue,
  useSetAgeValue,
  useSetBmiValue,
  useSetHeightValue,
  useSetWeightValue,
  useShowAgeValue,
  useWeightValue,
} from "../components/Contex";

const Bmi = () => {
  const setBmiValue = useSetBmiValue();
  const Weight = useWeightValue();
  const setWeight = useSetWeightValue();
  const Height = useHeightValue();
  const setHeight = useSetHeightValue();
  const Age = useShowAgeValue();
  const setAge = useSetAgeValue();

  const heightRef = useRef(null);
  const weightRef = useRef(null);

  const handleAge = (e) => {
    const age = e.target.value;
    setAge(age);
  };

  const handleHeight = (e) => {
    const height = e.target.value;
    setHeight(height);
  };

  const handleWeight = (e) => {
    const weight = e.target.value;
    setWeight(weight);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const bmi = Weight / ((Height * Height) / 10000);
    setBmiValue(bmi.toFixed(2));
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current && nextRef.current.focus();
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen sm:justify-around justify-evenly bg-[#eee] items-center ">
        <h1 className="text-4xl font-bold text-center">App Name</h1>
        <div className="flex flex-col font-medium">
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            id="Age"
            className="outline-none border-b-[1px] bg-transparent text-2xl font-bold sm:w-96 w-64 border-[#333] "
            value={Age}
            autoFocus
            onChange={handleAge}
            onKeyDown={(e) => handleKeyDown(e, heightRef)}
          />
        </div>
        <div className="flex flex-col font-medium">
          <label htmlFor="Height">Height (cm)</label>
          <input
            type="number"
            id="Height"
            className="outline-none border-b-[1px] bg-transparent text-2xl font-bold sm:w-96 w-64 border-[#333]"
            value={Height}
            onChange={handleHeight}
            ref={heightRef}
            onKeyDown={(e) => handleKeyDown(e, weightRef)}
          />
        </div>
        <div className="flex flex-col font-medium">
          <label htmlFor="Weight">Weight (kg)</label>
          <input
            type="number"
            id="Weight"
            className="outline-none border-b-[1px] bg-transparent text-2xl font-bold sm:w-96 w-64 border-[#333] "
            value={Weight}
            onChange={handleWeight}
            ref={weightRef}
            onKeyDown={(e) => handleKeyDown(e, null)}
          />
        </div>
        <button
          className="bg-orange-500 text-white disabled:bg-orange-400 font-medium text-xl sm:px-40 px-20 rounded-full py-2"
          onClick={handleCalculate}
          disabled={!Weight || !Height || !Age}
        >
          {Weight && Height && Age ? (
            <Link to={"/YourBMI"}>Calculate</Link>
          ) : (
            "Calculate"
          )}
        </button>
      </div>
    </>
  );
};

export default Bmi;
