import React, { useState } from 'react';

const AddressForm = ({ onConfirm }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation if necessary
    onConfirm(); // Call the confirm function from the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Address</h3>
      
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="John Doe"
        required
      />
      
      <label htmlFor="address">Street Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="i.e. Commercial Street, Bengaluru"
        required
      />
      
      <label htmlFor="address2">Street Address 2 (Optional)</label>
      <input
        type="text"
        id="address2"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        placeholder="Apartment, suite, etc."
      />
      
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        required
      />
      
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        required
      />
      
      <label htmlFor="zip">Zip Code</label>
      <input
        type="text"
        id="zip"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="Zip Code"
        required
      />

      <button type="submit">Confirm Order</button>
    </form>
  );
};

export default AddressForm;
