import Web3 from 'web3';
import USATRinsABI from './USATRinsABI.json'; // Make sure the ABI is correctly imported

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE'; // Replace with your contract address
const usatRinsContract = new web3.eth.Contract(USATRinsABI, contractAddress);

export const registerRIN = async (rinData) => {
    const accounts = await web3.eth.getAccounts();
    return usatRinsContract.methods.registerRIN(
        rinData.rinAssignmentCode,
        rinData.yearBatch,
        rinData.companyRegistrationId,
        rinData.facilityRegistrationId,
        rinData.batchNumber,
        rinData.assetPrice,
        rinData.usatScore,
        rinData.market
    ).send({ from: accounts[0] });
};

export const updatePrice = async (rinId, newPrice) => {
    const accounts = await web3.eth.getAccounts();
    return usatRinsContract.methods.updatePrice(rinId, newPrice).send({ from: accounts[0] });
};

export const updateUSATScore = async (rinId, newScore) => {
    const accounts = await web3.eth.getAccounts();
    return usatRinsContract.methods.updateUSATScore(rinId, newScore).send({ from: accounts[0] });
};

export const getRIN = async (rinId) => {
    return usatRinsContract.methods.getRIN(rinId).call();
};
