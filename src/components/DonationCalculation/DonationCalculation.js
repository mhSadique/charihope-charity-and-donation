import React from 'react';
import './DonationCalculation.css';

const DonationCalculation = ({donorsDonated}) => {
    const donorsNames = donorsDonated.map(donor => <li key={donor.id}>{donor.fullName}</li> );
    return (
        <div className="donation-calculation">
            <p className="donation-total">Total Donation: <b>${donorsDonated.reduce((total, current) => total + current.donation, 0)}</b> </p>
            <p className="donor-people">People who donated <b>({donorsDonated.length})</b>:</p>
            <ol>{donorsNames}</ol>
        </div>
    );
};

export default DonationCalculation;