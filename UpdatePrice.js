import React, { useState } from 'react';
import { updatePrice } from './web3Functions';

function UpdatePrice() {
    const [rinId, setRinId] = useState('');
    const [newPrice, setNewPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePrice(rinId, newPrice);
            alert('Price Updated Successfully');
        } catch (error) {
            alert('Update Failed: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Update RIN Price</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields for rinId and newPrice */}
                <input
                    name="rinId"
                    value={rinId}
                    onChange={(e) => setRinId(e.target.value)}
                    placeholder="RIN ID"
                />
                <input
                    name="newPrice"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="New Price"
                />
                <button type="submit">Update Price</button>
            </form>
        </div>
    );
}

export default UpdatePrice;
