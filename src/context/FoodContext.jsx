import React, { createContext, useState, useContext, useEffect } from 'react';

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    try {
      const response = await fetch('http://localhost:3000/meals');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error('Failed to fetch foods:', error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <FoodContext.Provider value={{ foods }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoods = () => useContext(FoodContext);
