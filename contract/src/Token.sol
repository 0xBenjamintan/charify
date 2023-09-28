// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Token is ERC20, ERC20Burnable {
    constructor() ERC20("CRYToken", "CRY") {
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Review the initial mint amount and recipient (currently the deployer).
    }
}
