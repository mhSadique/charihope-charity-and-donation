import React from 'react';
import './DonationCalculation.css';

const DonationCalculation = ({ donorsDonated, handleRemove }) => {
    const donorsNames = donorsDonated.map(donor => {
        return <li
            key={donor.id}
        >
            <p>{donor.fullName}</p>
            <span onClick={() => handleRemove(donor)}>X</span>
        </li>;
    });
    return (
        <div className="donation-calculation">
            <p className="donation-total">Total Donation: <b>${donorsDonated.reduce((total, current) => total + current.donation, 0)}</b> </p>
            <p className="donor-people">People who donated <b>({donorsDonated.length})</b>:</p>
            <ol className="donor-individuals">{donorsNames}</ol>
        </div>
    );
};

export default DonationCalculation;