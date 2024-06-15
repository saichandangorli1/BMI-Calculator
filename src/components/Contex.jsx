import React, { useContext, useState } from "react";

const ShowValue = React.createContext();
const SetValue = React.createContext();
const ShowWeightContext = React.createContext();
const SetWeightContext = React.createContext();
const SetHeightContext = React.createContext();
const ShowHeightContext = React.createContext();
const SetAgeContext = React.createContext();
const ShowAgeContext = React.createContext();

export const useShowBmiValue = () => useContext(ShowValue);
export const useSetBmiValue = () => useContext(SetValue);
export const useHeightValue = () => useContext(ShowHeightContext);
export const useWeightValue = () => useContext(ShowWeightContext);
export const useSetHeightValue = () => useContext(SetHeightContext);
export const useSetWeightValue = () => useContext(SetWeightContext);
export const useSetAgeValue = () => useContext(SetAgeContext);
export const useShowAgeValue = () => useContext(ShowAgeContext);

const Contex = ({ children }) => {
  const [Result, setResult] = useState();
  const [Height, setHeight] = useState();
  const [Weight, setWeight] = useState();
  const [Age, setAge] = useState();

  const setBmiValue = (bmi) => {
    setResult(bmi);
  };
  const setHeightValue = (height) => {
    setHeight(height);
  };
  const setWeightValue = (weight) => {
    setWeight(weight);
  };
  const setAgeValue = (age) => {
    setAge(age);
  };

  return (
    <ShowValue.Provider value={Result}>
      <SetValue.Provider value={setBmiValue}>
        <SetWeightContext.Provider value={setWeightValue}>
          <ShowWeightContext.Provider value={Weight}>
            <SetHeightContext.Provider value={setHeightValue}>
              <ShowHeightContext.Provider value={Height}>
                <SetAgeContext.Provider value={setAgeValue}>
                  <ShowAgeContext.Provider value={Age}>
                    {children}
                  </ShowAgeContext.Provider>
                </SetAgeContext.Provider>
              </ShowHeightContext.Provider>
            </SetHeightContext.Provider>
          </ShowWeightContext.Provider>
        </SetWeightContext.Provider>
      </SetValue.Provider>
    </ShowValue.Provider>
  );
};

export default Contex;
