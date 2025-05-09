// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract SimpleBank {
    mapping(address => uint256) private balances;

    function setBalance(uint256 amount) external {
        balances[msg.sender] = amount;
    }

    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    function increaseBalance(uint256 amount) external {
        balances[msg.sender] += amount;
    }

    function decreaseBalance(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
    }
}
