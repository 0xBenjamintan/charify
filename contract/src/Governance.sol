// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Token.sol"; // Ensure the path is correct.

contract Governance {
    struct Proposal {
        uint256 id;
        string name;
        string description;
        uint256 voteCount;
    }

    Token public token; // The token used for voting.
    mapping(uint256 => Proposal) public proposals; // All the proposals.
    mapping(address => mapping(uint256 => bool)) public votes; // To keep track of who has voted on what.

    event ProposalCreated(uint256 id, string name, string description);
    event Voted(uint256 proposalId, address voter);

    constructor(address _tokenAddress) {
        token = Token(_tokenAddress); // Set the token address here.
    }

    function createProposal(string memory name, string memory description) external {
        // This function should be restricted to only the DAO owners.
        // Review and possibly modify the access control logic.
        
        uint256 newId = _getProposalId();
        proposals[newId] = Proposal(newId, name, description, 0);
        
        emit ProposalCreated(newId, name, description);
    }

    function vote(uint256 proposalId) external {
        require(!votes[msg.sender][proposalId], "Already voted on this proposal");
        require(proposals[proposalId].id == proposalId, "Proposal does not exist");
        
        proposals[proposalId].voteCount += 1;
        votes[msg.sender][proposalId] = true;
        
        token.burn(1 * 10 ** token.decimals()); // Burning 1 $CRY token from the voter's balance.
        
        emit Voted(proposalId, msg.sender);
    }

    function _getProposalId() private view returns (uint256) {
        // Review the logic for generating new proposal IDs.
        // Currently, it's just the count of existing proposals.
        uint256 newId = 0;
        while (proposals[newId].id == newId) {
            newId++;
        }
        return newId;
    }
}
