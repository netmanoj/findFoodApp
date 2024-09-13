import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import AddressForm from '../components/AddressForm';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showAddressForm, setShowAddressForm] = useState(false);

  // Delivery charge
  const deliveryCharge = 50;

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  // GST as per Indian standard (18%)
  const gstPercentage = 18;
  const gstAmount = (totalPrice * gstPercentage) / 100;

  // Total price after adding GST and delivery charge
  const totalWithGSTAndDelivery = totalPrice + gstAmount + deliveryCharge;

  const handleCheckout = () => {
    setShowAddressForm(true); // Show the AddressForm on checkout
  };

  const handleConfirmOrder = () => {
    clearCart(); // Clear the cart after confirming the address
    setShowAddressForm(false); // Hide the AddressForm
  };

  return (
    <div className="cart-page">
      <h2 className="cart-heading">Your Cart</h2>

      {cart.length > 0 ? (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹ {item.price}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Price Breakdown */}
          <div className="price-details">
            <h3>Price Details</h3>
            <p>Subtotal: ₹ {totalPrice.toFixed(2)}</p>
            <p>GST (18%): ₹ {gstAmount.toFixed(2)}</p>
            <p>Delivery Charges: ₹ {deliveryCharge.toFixed(2)}</p>
            <h4>Total (Including GST & Delivery): ₹ {totalWithGSTAndDelivery.toFixed(2)}</h4>
          </div>

          {/* Conditionally render the checkout button if there are items and address form is not shown */}
          {!showAddressForm && (
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          )}

          {/* Show the AddressForm when the checkout button is clicked */}
          {showAddressForm && <AddressForm onConfirm={handleConfirmOrder} />}
        </>
      ) : (
        // Display a message when there are no items in the cart
        <p className="empty-cart-message">No items in the cart</p>
      )}
    </div>
  );
};

export default CartPage;
