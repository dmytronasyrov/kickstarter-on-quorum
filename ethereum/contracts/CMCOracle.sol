pragma solidity ^0.4.21;

contract CMCOracle {

    address public owner;
    uint public btcMarketCap;

    event CallbackGetBTCCap(address from, uint currentCap);

    function CMCOracle() public {
        owner = msg.sender;
    }

    function updateBTCCap() public {
        emit CallbackGetBTCCap(owner, btcMarketCap);
    }

    function setBTCCap(uint cap) public {
        require(msg.sender == owner);
        btcMarketCap = cap;
    }

    function getBTCCap() constant public returns (uint) {
        return btcMarketCap;
    }
}
