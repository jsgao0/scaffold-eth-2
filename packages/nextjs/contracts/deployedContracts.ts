/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    CommunityGovernance: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "description",
              type: "string",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum CommunityGovernance.ProposalStage",
              name: "stage",
              type: "uint8",
            },
          ],
          name: "ProposalStageChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "voter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "voteYes",
              type: "bool",
            },
          ],
          name: "Voted",
          type: "event",
        },
        {
          inputs: [],
          name: "chairperson",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "completeProposalExecution",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
          ],
          name: "createProposal",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_voter",
              type: "address",
            },
          ],
          name: "getProposalInfo",
          outputs: [
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "voteCountYes",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "voteCountNo",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              internalType: "enum CommunityGovernance.ProposalStage",
              name: "stage",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "hasVoted",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "proposals",
          outputs: [
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "voteCountYes",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "voteCountNo",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              internalType: "enum CommunityGovernance.ProposalStage",
              name: "stage",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "startProposalExecution",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_voteYes",
              type: "bool",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
