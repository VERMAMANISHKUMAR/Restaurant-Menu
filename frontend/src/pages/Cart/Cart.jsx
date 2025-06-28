import React, { useState } from 'react';

const initialCart = {
  item1: { name: 'Vegetarian Pizza', price: 399, quantity: 1, imageUrl: 'https://placehold.co/300x200' },
  item2: { name: 'Cheeseburger', price: 249, quantity: 1, imageUrl: 'https://placehold.co/300x200' },
  item3: { name: 'Mango Lassi', price: 129, quantity: 1, imageUrl: 'https://placehold.co/300x200' },
  item4: { name: 'Chocolate Mousse', price: 179, quantity: 1, imageUrl: 'https://placehold.co/300x200' }
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const updateQuantity = (itemId, change) => {
    setCartItems(prev => {
      const newQuantity = Math.max(1, prev[itemId].quantity + change);
      return {
        ...prev,
        [itemId]: { ...prev[itemId], quantity: newQuantity },
      };
    });
  };

  const calculateTotal = () => {
    const itemTotal = Object.values(cartItems).reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxes = Math.round(itemTotal * 0.05);
    const totalPayable = itemTotal + taxes;
    return { itemTotal, taxes, totalPayable };
  };

  const { itemTotal, taxes, totalPayable } = calculateTotal();

  const handlePayment = () => {
    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }
    alert(`Redirecting to ${selectedPayment} payment gateway...`);
    setTimeout(() => {
      alert('Payment successful! Thank you for your order.');
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">Your Food Cart</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {Object.entries(cartItems).map(([id, item]) => (
          <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex">
            <div className="w-1/3">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">Delicious & fresh</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-green-600">₹{item.price}</p>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(id, -1)} className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">-</button>
                  <span className="mx-2 font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(id, 1)} className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Item Total:</span>
            <span>₹{itemTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes & Fees:</span>
            <span>₹{taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-4 mt-4">
            <span>Total Payable:</span>
            <span className="text-green-600">₹{totalPayable.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {['PhonePe', 'Google Pay', 'Paytm'].map(method => (
            <div
              key={method}
              onClick={() => setSelectedPayment(method)}
              className={`cursor-pointer border rounded-lg p-4 text-center bg-white transition-all duration-300 hover:shadow-md ${selectedPayment === method ? 'border-green-500 bg-green-50' : ''}`}
            >
              <img
                src={`https://placehold.co/300x100?text=${method.replace(' ', '+')}`}
                alt={`${method} logo`}
                className="w-full h-auto mb-2 rounded"
              />
              <p className="font-medium">{method}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handlePayment}
          disabled={!selectedPayment}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Go to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
