import React, { useEffect, useState } from 'react';
import './DonorsContainer.css';
import DonorsList from './../DonorsList/DonorsList';
import DonationCalculation from './../DonationCalculation/DonationCalculation';

const DonorsContainer = () => {
    const LOCAL_STORAGE_NAME = 'DonorClub';
    const [donors, setDonors] = useState([]);
    const [donorsDonated, setDonorsDonated] = useState([]);

    function handleDonation(newDonor) {
        const oldDonors = [...donorsDonated];
        const newestDonor = oldDonors.find(oldDonor => oldDonor.id === newDonor.id);
        const localStorageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
        if (!newestDonor) {
            setDonorsDonated([...donorsDonated, newDonor]);
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify([...localStorageItems, newDonor.id]));
        }
    }
    // #########################################
    // below function removes items form local storage 
    // when the cross cutton is clicked

    function handleStorageRemove(donor) {
        const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
        const newDonors = [...donorsDonated];
        console.log(donor.id);
        for (let i = 0; i < newDonors.length; i++) {
            if (newDonors[i]) {
                console.log(newDonors[i].id);
            }
        }
        console.log(newDonors);
    }

    useEffect(() => {
        const itemsRetrieved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
        if (itemsRetrieved.length) {
            const newDonors = [];
            for (const item of itemsRetrieved) {
                for (const donor of donors) {
                    if (donor.id === item) {
                        newDonors.push(donor);
                    }
                }
            }
            setDonorsDonated(newDonors);
        }
        console.log(donors);
    }, [donors]);

    useEffect(() => {
        fetch('./MOCK_DATA.json')
            .then(res => res.json())
            .then(data => setDonors(data));
    }, []);

    return (
        <div className="donors-container">
            <DonorsList donors={donors} handleDonation={handleDonation} />
            <DonationCalculation donorsDonated={donorsDonated} handleRemove={handleStorageRemove} />
        </div>
    );
};

export default DonorsContainer;