import React from 'react';
import './Donor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const Donor = ({ donor, handleDonation }) => {
    const { fullName: name, age, country, donation, image, occupation, gender } = donor;
    return (
        <div className="donor">
            <img src={image} alt={name} />
            <p><b>Name:</b> {name}</p>
            <p><b>Profession:</b> {occupation}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Country:</b> {country}</p>
            <p><b>Donation:</b> ${donation}</p>
            <button
                onClick={() => handleDonation(donor)} 
            >
                <FontAwesomeIcon icon={faHandHoldingUsd} /> 
                Use {gender.includes('F') ? 'Her' : 'His'} Donation 
            </button>
        </div>
    );
};

export default Donor;