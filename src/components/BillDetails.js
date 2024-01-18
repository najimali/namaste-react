import React from 'react';
import '../styles/bill-details.css'; // Your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const BillDetails = () => {
  const totalAmount = useSelector(store => store.cart.totalAmount)
  return (
    <div className="bill-container">
      <div className="bill-header">
        Bill details
      </div>
      <div className="bill-content">
        <div className="bill-row">
          <span><FontAwesomeIcon icon={faListUl} /> Item total</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="bill-row">
          <span><FontAwesomeIcon icon={faMotorcycle} /> Delivery charge</span>
          <span className="delivery-info">
          <span className="original-price">₹45</span> <span className="free-text">FREE</span>
          </span>
        </div>
        <div className="bill-row total">
          <span>Grand total</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>
    </div>
  );
}


export default BillDetails;
