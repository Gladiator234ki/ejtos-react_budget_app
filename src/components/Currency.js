
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currencys.css';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    }

    return (
        <div className='currency-dropdown'>
            <label>Select Currency:</label>
            <select
                className='currency-select'
                onChange={handleCurrencyChange}
                value={currency}
            >
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default Currency;
