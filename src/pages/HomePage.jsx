import React from 'react';
import { useFoods } from '../context/FoodContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { foods } = useFoods();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    addToCart(food);
  };

  const handleViewDetails = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <div className="container">
      <h2>Food Menu</h2>
      <div className="food-menu">
        {foods.map(food => (
          <div className="food-item" key={food.id}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>₹ {food.price}</p>
            <button onClick={() => handleAddToCart(food)}>Add to Cart</button>
            <button onClick={() => handleViewDetails(food.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
