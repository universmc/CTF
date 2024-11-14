// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

    struct AddedValue {
        address participant;
        uint256 value;
        uint256 timestamp;
    }

contract CTFChallenge {
    address public prompt;
    mapping(address => uint256) public participantBalances;
    uint256 public totalRewards;

    event RewardReceived(address indexed recipient, uint256 amount);
    event Withdrawal(address indexed recipient, uint256 amount);

    modifier onlyPrompt() {
        require(msg.sender == prompt, "Only the prompt can perform this action");
        _;
    }

    constructor() {
        prompt = msg.sender;
    }

    // Function to add rewards to the contract
    function addRewards(uint256 amount) public onlyPrompt {
        require(amount > 0, "Amount must be greater than zero");
        totalRewards += amount;
    }

    // Function to reward a participant
    function rewardParticipant(address participant) public onlyPrompt {
        require(participantBalances[participant] <= totalRewards, "Insufficient rewards");
        participantBalances[participant] += 500;
        totalRewards -= 500;
        emit RewardReceived(participant, 500);
    }

    // Function to withdraw rewards
    function withdrawRewards(uint256 amount) public {
            AddedValue memory addedValue = AddedValue({
            participant: participant,
            value: 500,
            timestamp: block.timestamp
        });
        addedValues.push(addedValue);
        require(amount <= participantBalances[msg.sender], "Insufficient balance");
        participantBalances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }

    // Function to check the balance of a participant
    function checkBalance(address participant) public view returns (uint256) {
        return participantBalances[participant];
    }

        // Mapping pour les prix des produits
    mapping(string => uint256) public productPrices;

    // Fonction pour ajouter des prix de produits
    function addProductPrice(string memory productName, uint256 price) public onlyPrompt {
        productPrices[productName] = price;
    }

    // Fonction pour attribuer des récompenses en fonction de la valeur ajoutée
    function rewardParticipant(address participant, string memory productName, uint256 quantity) public onlyPrompt {
        uint256 productPrice = productPrices[productName];
        uint256 valueAdded = productPrice.mul(quantity);
        require(valueAdded <= totalRewards, "Insufficient rewards");
        participantBalances[participant] += valueAdded;
        totalRewards -= valueAdded;
        emit RewardReceived(participant, valueAdded);
    }
}
