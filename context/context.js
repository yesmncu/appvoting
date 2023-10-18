// AppContext.js

import { createContext, useContext, useEffect, useState } from 'react';
import { contentApi } from '../api/store';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await contentApi();
        setData(apiResponse);
      } catch (error) {
        console.error('API request error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
