import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Checkout.module.css'; 

const Checkout = () => {
    const { cart, calculateTotal } = useCart();
    const navigate = useNavigate();

    const handleProceedToPayment = () => {
        alert('Payment done successfully!');
        navigate('/'); 
    };
    const totalAmount = calculateTotal();
    const discountPercentage = 10; 
    const discountAmount = totalAmount * (discountPercentage / 100);
    const discountedTotal = totalAmount - discountAmount;

    return (
        <div className={styles['checkout-container']}>
            <h2>Checkout</h2>
            <table className={styles['checkout-table']}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles['checkout-total']}>
                <h4>Total Amount with Discount: ${discountedTotal.toFixed(2)}</h4>
            </div>
            <button className={styles['proceed-button']} onClick={handleProceedToPayment}>Proceed to Payment</button>
        </div>
    );
};

export default Checkout;
