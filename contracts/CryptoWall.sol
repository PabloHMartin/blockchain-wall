// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract CryptoWall {
    address public owner;
    mapping(address => string) public messages;
    address[] public keys;

    constructor() public {
        owner = msg.sender;
    }

    function setMsg(string memory _message) public {
        messages[msg.sender] = _message;
        keys.push(msg.sender);
    }

    function getMessagesSize() external view returns (uint256 count) {
        return keys.length;
    }

    function getMsg(address _address) public view returns (string memory) {
        return messages[_address];
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
