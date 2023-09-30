//contract address: 75yqoCPaKUvhpaftLvcfjhwaRjKxH78vpK78jTHN6xe9

import "solana";

interface TokenInterface {
    function get_balance(address account) external view returns (uint256);
    function burn(address account, uint256 amount) external;
}

TokenInterface constant token = TokenInterface(address'6SDfYzp952PeWfVZqzgx99FX4jn1W4RguQicz883iUGb');

@program_id("75yqoCPaKUvhpaftLvcfjhwaRjKxH78vpK78jTHN6xe9")
contract SparkathonContract {
    uint256 private _proposalIds; // Manual counter
    // TokenInterface public token; // Token contract interface instance

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
        uint256 indexed proposalId,
        string description,
        uint256 creationDate,
        address indexed creator
    );
    event ProposalExecuted(uint256 indexed proposalId);
    event VoteCountUpdated(uint256 indexed proposalId, uint256 voteCount);

    @payer(payer)
    constructor(){}

    function createProposal(address creator, string calldata _description) external {
        require(bytes(_description).length > 0, "Description cannot be empty!");

        uint256 proposalId = _proposalIds;
        Proposal storage proposal = idToProposals[proposalId];
        proposal.description = _description;
        proposal.creationDate = block.timestamp;
        proposal.creator = creator;

        creatorToProposalIds[creator].push(proposalId);

        emit ProposalCreated(proposalId, _description, block.timestamp, creator);
        
        _proposalIds++;
    }

    function vote(address voter, uint256 _proposalId) external {
        require(_proposalId < _proposalIds, "Proposal does not exist");
        require(!idToProposals[_proposalId].executed, "Proposal already executed");
        require(token.get_balance(voter) > 0, "Insufficient token balance"); 

        token.burn(voter, 1);
        idToProposals[_proposalId].voteCount++;

        emit VoteCountUpdated(_proposalId, idToProposals[_proposalId].voteCount);
    }

    function getProposalsByCreator(address creator) external view returns (uint256[] memory) {
        return creatorToProposalIds[creator];
    }

    function executeProposal(uint256 _proposalId) external {
        require(_proposalId < _proposalIds, "Proposal does not exist");
        require(!idToProposals[_proposalId].executed, "Proposal already executed");
        
        idToProposals[_proposalId].executed = true;
        emit ProposalExecuted(_proposalId);
    }

    function getProposal(uint256 _proposalId) external view returns (Proposal memory) {
        require(_proposalId < _proposalIds, "Proposal does not exist");
        return idToProposals[_proposalId];
    }

    function getLastProposalId() external view returns (uint256) {
        return _proposalIds;
    }

    function getAllProposals() external view returns (Proposal[] memory) {
    uint32 arraySize = uint32(min(_proposalIds, type(uint32).max));
    Proposal[] memory proposals = new Proposal[](arraySize);
    for (uint256 i = 0; i < arraySize; i++) {
        proposals[i] = idToProposals[i];
    }
    return proposals;
}

function min(uint256 a, uint256 b) private pure returns (uint256) {
    return a < b ? a : b;
}

}