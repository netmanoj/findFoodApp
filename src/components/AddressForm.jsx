import React, { useState } from 'react';


const AddressForm = ({ onConfirm }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here if necessary
    onConfirm();  // Call the confirm function from the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Address Form</h3>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      <button type="submit">Confirm Order</button>
    </form>
  );
};

export default AddressForm;
