// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CommunityGovernance {
    enum ProposalStage { NotStarted, InProgress, Completed }

    struct Proposal {
        string description;
        uint voteCountYes;
        uint voteCountNo;
        bool executed;
        ProposalStage stage;
        mapping(address => bool) voted;
    }

    address public chairperson;
    mapping(uint => Proposal) public proposals;
    uint public proposalCount;

    event ProposalCreated(uint proposalId, string description);
    event Voted(uint proposalId, address voter, bool voteYes);
    event ProposalStageChanged(uint proposalId, ProposalStage stage);

    modifier onlyChairperson() {
        require(msg.sender == chairperson, "Only chairperson can perform this action");
        _;
    }

    constructor() {
        chairperson = msg.sender;
    }

    function createProposal(string memory _description) public onlyChairperson {
        Proposal storage newProposal = proposals[proposalCount];
        newProposal.description = _description;
        newProposal.stage = ProposalStage.NotStarted;
        emit ProposalCreated(proposalCount, _description);
        proposalCount++;
    }

    function vote(uint _proposalId, bool _voteYes) public {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.voted[msg.sender], "Already voted on this proposal");
        require(!proposal.executed, "Proposal already executed");
        require(proposal.stage != ProposalStage.Completed, "Proposal is already completed");

        if (_voteYes) {
            proposal.voteCountYes++;
        } else {
            proposal.voteCountNo++;
        }
        proposal.voted[msg.sender] = true;
        emit Voted(_proposalId, msg.sender, _voteYes);
    }

    function startProposalExecution(uint _proposalId) public onlyChairperson {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.stage == ProposalStage.NotStarted, "Proposal execution already started or completed");
        proposal.stage = ProposalStage.InProgress;
        emit ProposalStageChanged(_proposalId, ProposalStage.InProgress);
    }

    function completeProposalExecution(uint _proposalId) public onlyChairperson {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.stage == ProposalStage.InProgress, "Proposal not in progress");
        proposal.stage = ProposalStage.Completed;
        proposal.executed = true;
        emit ProposalStageChanged(_proposalId, ProposalStage.Completed);

        // 根据投票结果执行相应操作...
    }

    function getProposalInfo(uint _proposalId, address _voter) public view returns (string memory description, uint voteCountYes, uint voteCountNo, bool executed, ProposalStage stage, bool hasVoted) {
        Proposal storage proposal = proposals[_proposalId];
        return (
            proposal.description,
            proposal.voteCountYes,
            proposal.voteCountNo,
            proposal.executed,
            proposal.stage,
            proposal.voted[_voter]
        );
    }
}
