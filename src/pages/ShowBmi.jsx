// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useHeightValue, useShowBmiValue } from "../components/Contex";

// const ShowBmi = () => {
//   const recValue = useShowBmiValue();
//   const height = useHeightValue();

//   const SuggestedWeight = [

// [36.3,47.9],
// [38.9,51.2],
// [41.5,54.6],
//  [44.4,58.2],
//  [47.4,61.8],
//  [50.5,65.7],
//  [53.5,69.4],
//  [56.6,73.4],
//  [59.9,77.7],
//  [63.3,82.1],
//  [66.6,86.4],
//  [70.1,91.1],
//  [73.6,95.8],
// ]

// const [fw,setfw] = useState()
// const [sw,setsw] = useState()

// if (height >= 140 && height < 145 ) {
//   setfw(SuggestedWeight[0][0])
//   setsw(SuggestedWeight[0][1])
// }
// else if (height >= 145 && height < 150 ) {
//   setfw(SuggestedWeight[1][0])
//   setsw(SuggestedWeight[1][1])
// }
// else if (height >= 150 && height < 155 ) {
//   setfw(SuggestedWeight[2][0])
//   setsw(SuggestedWeight[2][1])
// }
// else if (height >= 155 && height < 160 ) {
//   setfw(SuggestedWeight[3][0])
//   setsw(SuggestedWeight[3][1])
// }
// else if (height >= 160 && height < 165 ) {
//   setfw(SuggestedWeight[4][0])
//   setsw(SuggestedWeight[4][1])
// }
// else if (height >= 165 && height < 170 ) {
//   setfw(SuggestedWeight[5][0])
//   setsw(SuggestedWeight[5][1])
// }
// else if (height >= 170 && height < 175 ) {
//   setfw(SuggestedWeight[6][0])
//   setsw(SuggestedWeight[6][1])
// }
// else if (height >= 175 && height < 180 ) {
//   setfw(SuggestedWeight[7][0])
//   setsw(SuggestedWeight[7][1])
// }
// else if (height >= 180 && height < 185 ) {
//   setfw(SuggestedWeight[8][0])
//   setsw(SuggestedWeight[8][1])
// }
// else if (height >= 185 && height < 190 ) {
//   setfw(SuggestedWeight[9][0])
//   setsw(SuggestedWeight[9][1])
// }
// else if (height >= 190 && height < 195 ) {
//   setfw(SuggestedWeight[10][0])
//   setsw(SuggestedWeight[10][1])
// }
// else if (height >= 195 && height < 200 ) {
//   setfw(SuggestedWeight[11][0])
//   setsw(SuggestedWeight[11][1])
// }
// else if (height >= 200 ) {
//   setfw(SuggestedWeight[12][0])
//   setsw(SuggestedWeight[12][1])
// }else{
//   setfw(20);
//   setsw(30)
// }

//   return (
//     <div className="h-screen flex justify-start gap-1 flex-col items-center bg-[#eee]">
//       <div className=" flex items-center justify-start w-full m-4 px-8 ">
//         <Link to="/">
//           <div>back</div>
//         </Link>
//         <h1 className="text-slate-900 text-3xl text-center w-full">
//           Your current BMI
//         </h1>
//       </div>

//       <div className="flex flex-col justify-center items-start w-full gap-10 ">
//         <div className="flex flex-col gap-4 m-4 px-6">
//           <h2 className="text-slate-900 font-bold text-7xl">{recValue} 290</h2>
//           <p className="text-[#606060] font-medium text-base">
//             Body mass index
//           </p>
//         </div>

//         <div className="px-10 w-full ">
//           <div className="w-full rounded-full h-2 custom-gradient "></div>
//           <div className="flex justify-around text-[#757575]">
//             <p>18.5</p>
//             <p>24.0</p>
//             <p>28.0</p>
//           </div>
//           {/* bg-gradient-to-r from-sky-500 to-lime-400 from-lime-400 to-orange-500 */}
//           <div className="flex justify-between px-14 pr-20 items-center mt-6">
//             <div className="size-3 rounded-sm bg-sky-500 flex items-center">
//               <p className="pl-4">Underweight</p>
//             </div>
//              <div className="size-3 rounded-sm bg-lime-400 flex items-center">
//              <p className="pl-4">Normal</p>
//             </div>
//              <div className="size-3 rounded-sm bg-orange-400 flex items-center">
//              <p className="pl-4">Overweight</p>
//             </div>
//              <div className="size-3 rounded-sm bg-orange-600 flex items-center">
//              <p className="pl-4 ">Obese</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-[1px] bg-[#2c2c2c]"></div>
//         <div className="flex flex-col w-full px-6 pr-40 gap-10">
//           <h3>Analysis</h3>
//           <div className="flex justify-between w-full">
//             <h4 className="text-slate-900 font-medium">{"Height (cm)"}</h4>
//             <h4 className="text-orange-500 font-bold">{height}77</h4>
//           </div>
//           <div className="flex justify-between w-full">
//             <h4 className="text-slate-900 font-medium">
//               {"Suggested weight (kg)"}
//             </h4>

//             <h4 className="text-orange-500 font-bold">{fw +"~" + sw }</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowBmi;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHeightValue, useShowBmiValue } from "../components/Contex";

const ShowBmi = () => {
  const recValue = useShowBmiValue();
  const height = useHeightValue();
  const SuggestedWeight = [
    [36.3, 47.9],
    [38.9, 51.2],
    [41.5, 54.6],
    [44.4, 58.2],
    [47.4, 61.8],
    [50.5, 65.7],
    [53.5, 69.4],
    [56.6, 73.4],
    [59.9, 77.7],
    [63.3, 82.1],
    [66.6, 86.4],
    [70.1, 91.1],
    [73.6, 95.8],
  ];

  const [fw, setfw] = useState();
  const [sw, setsw] = useState();
  const [txt, settxt] = useState("");
  const [left, setleft] = useState("");
  const [clr, setclr] = useState("");

  useEffect(() => {
    const index = Math.floor((height - 140) / 5);
    if (index >= 0 && index < SuggestedWeight.length) {
      setfw(SuggestedWeight[index][0]);
      setsw(SuggestedWeight[index][1]);
    } else {
      setfw(20); // Default or error value
      setsw(30); // Default or error value
    }

    if (recValue < 18.5) {
      settxt("Underweight");
      setleft("left-[6%]");
      setclr("bg-sky-500");
    } else if (recValue > 18.5 && recValue < 24.9) {
      settxt("Normal");
      setleft("left-[37%]");
      setclr("bg-lime-400");
    } else if (recValue > 25.0 && recValue < 29.9) {
      settxt("Overweight");
      setleft("left-[68%]");
      setclr("bg-orange-400");
    } else if (recValue > 30.0) {
      settxt("Obese");
      setleft("sm:left-[87%] left-[67%]");
      setclr("bg-orange-600");
    } else {
      settxt("Invalid");
      setleft("left-[35%] sm:left-[46%]");
      setclr("bg-green-400");
    }
  }, [height]);

  return (
    <div className="h-screen flex justify-start gap-1 flex-col items-center bg-[#eee]">
      <div className="flex items-center justify-start w-full m-4 px-8">
        <Link to="/">
          <div>back</div>
        </Link>
        <h1 className="text-slate-900 text-2xl sm:text-3xl text-center w-full">
          Your current BMI
        </h1>
      </div>
      <div className="flex flex-col justify-center items-start w-full gap-10">
        <div className="flex flex-col gap-4 m-4 px-6">
          <h2 className="text-slate-900 font-bold text-7xl">{recValue}</h2>
          <p className="text-[#606060] font-medium text-base">
            Body mass index
          </p>
        </div>
        <div className="px-10 w-full">
          <button
            type="button"
            class={`relative items-center px-5 py-2.5 text-sm ${left} font-medium text-center outline-none mb-5 text-white ${clr} rounded-lg  `}
          >
            {txt}
          </button>
          <div className="w-full rounded-full h-2 custom-gradient"></div>
          <div className="flex justify-around text-[#757575]">
            <p>18.5</p>
            <p>24.0</p>
            <p>28.0</p>
          </div>
          <div className="flex justify-between sm:flex-row flex-col gap-6 sm:px-14 pr-20 items-center mt-6">
            <div className="size-3 rounded-sm bg-sky-500 flex items-center">
              <p className="pl-4">Underweight</p>
            </div>
            <div className="size-3 rounded-sm bg-lime-400 flex items-center">
              <p className="pl-4">Normal</p>
            </div>
            <div className="size-3 rounded-sm bg-orange-400 flex items-center">
              <p className="pl-4">Overweight</p>
            </div>
            <div className="size-3 rounded-sm bg-orange-600 flex items-center">
              <p className="pl-4 ">Obese</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#2c2c2c]"></div>
        <div className="flex flex-col w-full px-6 sm:pr-40 pr-10 gap-10">
          <h3>Analysis</h3>
          <div className="flex justify-between w-full">
            <h4 className="text-slate-900 font-medium">{"Height (cm)"}</h4>
            <h4 className="text-orange-500 font-bold">{height}</h4>
          </div>
          <div className="flex justify-between w-full">
            <h4 className="text-slate-900 font-medium">
              {"Suggested weight (kg)"}
            </h4>
            <h4 className="text-orange-500 font-bold">{`${fw} ~ ${sw}`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBmi;
