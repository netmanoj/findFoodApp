import React from 'react';
import { useParams } from 'react-router-dom';
import { useFoods } from '../context/FoodContext';
import { useCart } from '../context/CartContext';


const FoodDetailPage = () => {
  const { id } = useParams();
  const { foods } = useFoods();
  const { addToCart } = useCart();

  const food = foods.find(f => f.id === id);

  if (!food) return <div>Food not found</div>;

  return (
    <div className="food-details">
      
      <div className="details">
        <h2>{food.name}</h2>
        <p className="description">{food.description}</p>
        <p className="price">₹ {food.price}</p>
        <button className="add-to-cart-button" onClick={() => addToCart(food)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodDetailPage;
