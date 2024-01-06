import React, { createContext, useContext, useEffect, useState } from 'react';
import { HomeBooks } from '../Api/Api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(HomeBooks);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [selectedOptions , setSelectedOptions ] = useState([]);
  

  useEffect(()=>{
    setSelectedOptions(checkedOptions)
  },[checkedOptions])


  const values = { data, setData ,checkedOptions, setCheckedOptions,selectedOptions , setSelectedOptions };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export const useContextApi = () => {
  return useContext(AppContext);
};
