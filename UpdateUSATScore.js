import React, { useState } from 'react';
import { updateUSATScore } from './web3Functions';

function UpdateUSATScore() {
    const [rinId, setRinId] = useState('');
    const [newScore, setNewScore] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUSATScore(rinId, newScore);
            alert('USAT Score Updated Successfully');
        } catch (error) {
            alert('Update Failed: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Update RIN USAT Score</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="rinId"
                    value={rinId}
                    onChange={(e) => setRinId(e.target.value)}
                    placeholder="RIN ID"
                />
                <input
                    type="number"
                    name="newScore"
                    value={newScore}
                    onChange={(e) => setNewScore(e.target.value)}
                    placeholder="New USAT Score"
                />
                <button type="submit">Update Score</button>
            </form>
        </div>
    );
}

export default UpdateUSATScore;
