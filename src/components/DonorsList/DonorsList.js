import React from 'react';
import './DonorsList.css';
import Donor from './../Donor/Donor';

const DonorsList = ({donors, handleDonation}) => {
    return (
        <div className="donor-list">
            {donors.map(donor => <Donor donor={donor} key={donor.id} handleDonation={handleDonation} />)}
        </div>
    );
};

export default DonorsList;