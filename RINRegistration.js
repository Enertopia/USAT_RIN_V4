import React, { useState } from 'react';
import { registerRIN } from './web3Functions';

function RINRegistration() {
    const [rinData, setRinData] = useState({
        rinAssignmentCode: '',
        yearBatch: '',
        companyRegistrationId: '',
        facilityRegistrationId: '',
        batchNumber: '',
        assetPrice: '',
        usatScore: '',
        market: 'Mandatory', // Default value
    });

    const handleChange = (e) => {
        setRinData({ ...rinData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerRIN(rinData);
            alert('RIN Registered Successfully');
        } catch (error) {
            alert('Registration Failed: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Register RIN</h2>
            <form onSubmit={handleSubmit}>
                {/* Add form inputs for each field in rinData */}
                <input
                    name="rinAssignmentCode"
                    value={rinData.rinAssignmentCode}
                    onChange={handleChange}
                    placeholder="RIN Assignment Code"
                />
                {/* Repeat for other fields */}
                <button type="submit">Register RIN</button>
            </form>
        </div>
    );
}

export default RINRegistration;
