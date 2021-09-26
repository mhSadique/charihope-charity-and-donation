import React, { useEffect, useState } from 'react';
import './DonorsContainer.css';
import DonorsList from './../DonorsList/DonorsList';
import DonationCalculation from './../DonationCalculation/DonationCalculation';

const DonorsContainer = () => {
    const [donors, setDonors] = useState([]);
    const [donorsDonated, setDonorsDonated] = useState([]);

    const handleDonation = (newDonor) => {
        const newDonors = [...donorsDonated, newDonor];
        setDonorsDonated(newDonors);
    };

    useEffect(() => {
        fetch('./MOCK_DATA.json')
            .then(res => res.json())
            .then(data => setDonors(data));
    }, []);
    return (
        <div className="donors-container">
            <DonorsList donors={donors} handleDonation={handleDonation} />
            <DonationCalculation donorsDonated={donorsDonated} />
        </div>
    );
};

export default DonorsContainer;