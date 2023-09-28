// SPDX-License-Identifier: MIT

interface IToken {
    function burnFrom(address account, uint256 amount) external;
    function balanceOf(address account) external view returns (uint256);
}

@program_id("CRhDWttmjowYcvEV8c7ztCF77KpaahRwyr8dWHd4BykB")
contract sparkathonContract {
    uint256 private _proposalIds; // Manual counter

    IToken public token; // Token contract interface instance

    struct Proposal {
        string description;
        uint256 voteCount;
        uint256 creationDate;
        address creator;
        bool executed;
    }

    mapping(uint256 => Proposal) private idToProposals;
    mapping(address => uint256[]) private creatorToProposalIds;

    event ProposalCreated(
        uint256 proposalId,
        string description,
        uint256 creationDate,
        address creator
    );
    event ProposalExecuted(uint256 proposalId);
    event VoteCountUpdated(uint256 proposalId, uint256 voteCount);

    @payer(payer)
    constructor(address _tokenAddress) {
        token = IToken(_tokenAddress); // Initialize the token interface instance with the address of the deployed token contract
    }

    function createProposal(address payer, string calldata _description) external {
        require(bytes(_description).length > 0, "Description cannot be empty!");

        uint256 proposalId = _proposalIds;
        Proposal storage proposal = idToProposals[proposalId];
        proposal.description = _description;
        proposal.creationDate = block.timestamp;
        proposal.creator = payer;

        creatorToProposalIds[payer].push(proposalId);

        emit ProposalCreated(proposalId, _description, block.timestamp, payer);
        
        _proposalIds++; // Increment the counter manually
    }

    function vote(uint256 _proposalId) external {
        require(_proposalId <= _proposalIds, "Proposal does not exist");
        require(!idToProposals[_proposalId].executed, "Proposal already executed");
        require(token.balanceOf(msg.sender) > 0, "Insufficient token balance");

        token.burnFrom(msg.sender, 1); // Burn 1 token from the voter's balance
        idToProposals[_proposalId].voteCount++; // Increment local vote count

        emit VoteCountUpdated(_proposalId, idToProposals[_proposalId].voteCount);
    }

    function getProposalsByCreator(address creator) external view returns (uint256[] memory) {
        return creatorToProposalIds[creator];
    }

    function executeProposal(uint256 _proposalId) external {
        require(_proposalId <= _proposalIds, "Proposal does not exist");
        require(!idToProposals[_proposalId].executed, "Proposal already executed");
        
        idToProposals[_proposalId].executed = true;
        emit ProposalExecuted(_proposalId);
    }

    function getProposal(uint256 _proposalId) external view returns (Proposal memory) {
        require(_proposalId <= _proposalIds, "Proposal does not exist");
        return idToProposals[_proposalId];
    }

    function getLastProposalId() external view returns (uint256) {
        return _proposalIds;
    }

    function getAllProposals() public view returns (Proposal[] memory) {
        uint256 lastProposalId = _proposalIds;
        uint32 arraySize = uint32(min(lastProposalId, type(uint32).max));
        Proposal[] memory proposals = new Proposal[](arraySize);

        for (uint256 i = 0; i < arraySize; i++) {
            proposals[i] = idToProposals[i]; // proposalIds are 0-indexed
        }

        return proposals;
    }

    function min(uint256 a, uint256 b) private pure returns (uint256) {
        return a < b ? a : b;
    }
}
