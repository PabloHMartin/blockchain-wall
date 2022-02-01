// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;
pragma experimental ABIEncoderV2;

contract CryptoWall {
    struct Message {
        address _address;
        string message;
        string publishDate;
    }

    address public owner;
    Message[] private messages;

    constructor() {
        owner = msg.sender;
    }

    function resetMessages() public {
        require(msg.sender == owner);
        delete messages;
    }

    function setMsg(string memory _message, string memory _publishDate) public {
        Message memory _msg = Message(msg.sender, _message, _publishDate);
        messages.push(_msg);
    }

    function getMessagesSize() external view returns (uint256 count) {
        return messages.length;
    }

    function getAll() external view returns (Message[] memory) {
        return messages;
    }

    function getMsg(uint256 _index) public view returns (Message memory) {
        return messages[_index];
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
