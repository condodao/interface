import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CondoManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const condoManagerAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "condoId", internalType: "uint256", type: "uint256" },
      { name: "floorNumber", internalType: "uint256", type: "uint256" },
      { name: "apartmentNumber", internalType: "uint256", type: "uint256" },
    ],
    name: "addApart",
    outputs: [{ name: "apartId", internalType: "uint256", type: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "tokenAddress", internalType: "address", type: "address" },
      { name: "timelock", internalType: "address", type: "address" },
      { name: "governor", internalType: "address", type: "address" },
      { name: "valut", internalType: "address", type: "address" },
    ],
    name: "addCondo",
    outputs: [{ name: "condoId", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "ratedUserId", internalType: "uint256", type: "uint256" },
      { name: "isPositive", internalType: "bool", type: "bool" },
      { name: "comment", internalType: "string", type: "string" },
    ],
    name: "addRating",
    outputs: [{ name: "ratingId", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "shareId", internalType: "uint256", type: "uint256" }],
    name: "addRent",
    outputs: [{ name: "rentId", internalType: "uint256", type: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "pricePerBlock", internalType: "uint256", type: "uint256" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "addShare",
    outputs: [{ name: "shareId", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "description", internalType: "string", type: "string" },
      { name: "image", internalType: "string", type: "string" },
    ],
    name: "addUser",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "userAddress", internalType: "address", type: "address" }],
    name: "addressToId",
    outputs: [{ name: "userId", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "apartId", internalType: "uint256", type: "uint256" }],
    name: "getApart",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.Apart",
        type: "tuple",
        components: [
          { name: "userId", internalType: "uint256", type: "uint256" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "floorNumber", internalType: "uint256", type: "uint256" },
          { name: "apartmentNumber", internalType: "uint256", type: "uint256" },
          { name: "price", internalType: "uint256", type: "uint256" },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApartByToken",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.Apart",
        type: "tuple",
        components: [
          { name: "userId", internalType: "uint256", type: "uint256" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "floorNumber", internalType: "uint256", type: "uint256" },
          { name: "apartmentNumber", internalType: "uint256", type: "uint256" },
          { name: "price", internalType: "uint256", type: "uint256" },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "condoId", internalType: "uint256", type: "uint256" }],
    name: "getCondo",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.Condo",
        type: "tuple",
        components: [
          { name: "userId", internalType: "uint256", type: "uint256" },
          { name: "tokenAddress", internalType: "address", type: "address" },
          { name: "timelock", internalType: "address", type: "address" },
          { name: "governor", internalType: "address", type: "address" },
          { name: "vault", internalType: "address", type: "address" },
          {
            name: "status",
            internalType: "enum CondoEnums.Status",
            type: "uint8",
          },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getCondoByToken",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.Condo",
        type: "tuple",
        components: [
          { name: "userId", internalType: "uint256", type: "uint256" },
          { name: "tokenAddress", internalType: "address", type: "address" },
          { name: "timelock", internalType: "address", type: "address" },
          { name: "governor", internalType: "address", type: "address" },
          { name: "vault", internalType: "address", type: "address" },
          {
            name: "status",
            internalType: "enum CondoEnums.Status",
            type: "uint8",
          },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "ratingId", internalType: "uint256", type: "uint256" }],
    name: "getRating",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.Rating",
        type: "tuple",
        components: [
          { name: "ratedUserId", internalType: "uint256", type: "uint256" },
          { name: "raterUserId", internalType: "uint256", type: "uint256" },
          { name: "isPositive", internalType: "bool", type: "bool" },
          { name: "comment", internalType: "string", type: "string" },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "rentId", internalType: "uint256", type: "uint256" }],
    name: "getRent",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.Rent",
        type: "tuple",
        components: [
          { name: "userId", internalType: "uint256", type: "uint256" },
          { name: "shareId", internalType: "uint256", type: "uint256" },
          { name: "balance", internalType: "uint256", type: "uint256" },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "shareId", internalType: "uint256", type: "uint256" }],
    name: "getShare",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.Share",
        type: "tuple",
        components: [
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "userId", internalType: "uint256", type: "uint256" },
          { name: "pricePerBlock", internalType: "uint256", type: "uint256" },
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "userId", internalType: "uint256", type: "uint256" }],
    name: "getUser",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.User",
        type: "tuple",
        components: [
          { name: "wallet", internalType: "address", type: "address" },
          { name: "name", internalType: "string", type: "string" },
          { name: "description", internalType: "string", type: "string" },
          { name: "image", internalType: "string", type: "string" },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "userAddress", internalType: "address", type: "address" }],
    name: "getUserByAddress",
    outputs: [
      {
        name: "",
        internalType: "struct CondoStructs.User",
        type: "tuple",
        components: [
          { name: "wallet", internalType: "address", type: "address" },
          { name: "name", internalType: "string", type: "string" },
          { name: "description", internalType: "string", type: "string" },
          { name: "image", internalType: "string", type: "string" },
          { name: "createdAt", internalType: "uint256", type: "uint256" },
          { name: "updatedAt", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "nextApartId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "nextCondoId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "nextRatingId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "nextRentId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "nextShareId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "nextUserId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "condoId", internalType: "uint256", type: "uint256" },
      { name: "status", internalType: "enum CondoEnums.Status", type: "uint8" },
    ],
    name: "updCondo",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "ratingId", internalType: "uint256", type: "uint256" },
      { name: "isPositive", internalType: "bool", type: "bool" },
      { name: "comment", internalType: "string", type: "string" },
    ],
    name: "updRating",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "rentId", internalType: "uint256", type: "uint256" }],
    name: "updRent",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "shareId", internalType: "uint256", type: "uint256" },
      { name: "pricePerBlock", internalType: "uint256", type: "uint256" },
      { name: "isActive", internalType: "bool", type: "bool" },
    ],
    name: "updShare",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "description", internalType: "string", type: "string" },
      { name: "image", internalType: "string", type: "string" },
    ],
    name: "updUser",
    outputs: [{ name: "userId", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "apartId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "buyerId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "condoId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "floorNumber",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "apartmentNumber",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "price",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ApartAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "condoId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "creatorId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "tokenAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "timelock",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "governor",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "vault",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "CondoAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "condoId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "status",
        internalType: "enum CondoEnums.Status",
        type: "uint8",
        indexed: true,
      },
    ],
    name: "CondoUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "ratingId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "ratedUserId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "raterUserId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "isPositive",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "comment",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "RatingAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "ratingId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "isPositive",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "comment",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "RatingUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "rentId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "shareId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "renterId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "balance",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "RentAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "rentId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "balance",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "RentUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "shareId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "renterId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "pricePerBlock",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ShareAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "shareId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "pricePerBlock",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "isActive", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ShareUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "userId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "wallet",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "description",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      { name: "image", internalType: "string", type: "string", indexed: false },
    ],
    name: "UserAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "userId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "description",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      { name: "image", internalType: "string", type: "string", indexed: false },
    ],
    name: "UserUpdated",
  },
  { type: "error", inputs: [], name: "ApartmentNotFound" },
  { type: "error", inputs: [], name: "InsufficientPayment" },
  { type: "error", inputs: [], name: "UnauthorizedAccess" },
  { type: "error", inputs: [], name: "UserNotFound" },
] as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const condoManagerAddress = {
  534351: "0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc",
} as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const condoManagerConfig = {
  address: condoManagerAddress,
  abi: condoManagerAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const erc721Abi = [
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC721IncorrectOwner",
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC721InsufficientApproval",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC721InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC721InvalidOperator",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "ERC721InvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC721InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC721InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ERC721NonexistentToken",
  },
] as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const erc721Address = {
  534351: "0x0AA821d84076770E027B317226eC50Fe062dDe30",
} as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const erc721Config = { address: erc721Address, abi: erc721Abi } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NewCondoGovernor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const newCondoGovernorAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "condoNft", internalType: "address", type: "address" },
      { name: "condoTimelock", internalType: "address", type: "address" },
    ],
    name: "createGovernor",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "condoNft",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "condoTimelock",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "governor",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "NewGovernor",
  },
] as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const newCondoGovernorAddress = {
  534351: "0x7e48665c79F2b56189b5fB25e46D81506B6a28dE",
} as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const newCondoGovernorConfig = {
  address: newCondoGovernorAddress,
  abi: newCondoGovernorAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NewCondoNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const newCondoNftAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "condoManager", internalType: "address", type: "address" },
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "apartments", internalType: "uint256[][]", type: "uint256[][]" },
    ],
    name: "createNft",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "condoNFT",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "symbol", internalType: "string", type: "string", indexed: true },
      {
        name: "condoManager",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "apartments",
        internalType: "uint256[][]",
        type: "uint256[][]",
        indexed: false,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "metadata",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "NewNFT",
  },
] as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const newCondoNftAddress = {
  534351: "0x0AA821d84076770E027B317226eC50Fe062dDe30",
} as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const newCondoNftConfig = {
  address: newCondoNftAddress,
  abi: newCondoNftAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NewCondoTimelock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const newCondoTimelockAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [],
    name: "createTimelock",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "timelock",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "minDelay",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "proposers",
        internalType: "address[]",
        type: "address[]",
        indexed: false,
      },
      {
        name: "executors",
        internalType: "address[]",
        type: "address[]",
        indexed: false,
      },
      {
        name: "admin",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "NewTimelock",
  },
] as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const newCondoTimelockAddress = {
  534351: "0xe50eB1643C677C7efB944dd266f6431204613a53",
} as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const newCondoTimelockConfig = {
  address: newCondoTimelockAddress,
  abi: newCondoTimelockAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NewCondoVault
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const newCondoVaultAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "condoTimelock", internalType: "address", type: "address" },
    ],
    name: "createVault",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "condoTimelock",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "vault",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "NewVault",
  },
] as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const newCondoVaultAddress = {
  534351: "0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB",
} as const;

/**
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const newCondoVaultConfig = {
  address: newCondoVaultAddress,
  abi: newCondoVaultAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManager = /*#__PURE__*/ createUseReadContract({
  abi: condoManagerAbi,
  address: condoManagerAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addressToId"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerAddressToId =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addressToId",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getApart"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetApart = /*#__PURE__*/ createUseReadContract({
  abi: condoManagerAbi,
  address: condoManagerAddress,
  functionName: "getApart",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getApartByToken"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetApartByToken =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "getApartByToken",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getCondo"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetCondo = /*#__PURE__*/ createUseReadContract({
  abi: condoManagerAbi,
  address: condoManagerAddress,
  functionName: "getCondo",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getCondoByToken"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetCondoByToken =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "getCondoByToken",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getRating"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetRating = /*#__PURE__*/ createUseReadContract(
  {
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "getRating",
  }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getRent"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetRent = /*#__PURE__*/ createUseReadContract({
  abi: condoManagerAbi,
  address: condoManagerAddress,
  functionName: "getRent",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getShare"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetShare = /*#__PURE__*/ createUseReadContract({
  abi: condoManagerAbi,
  address: condoManagerAddress,
  functionName: "getShare",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getUser"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetUser = /*#__PURE__*/ createUseReadContract({
  abi: condoManagerAbi,
  address: condoManagerAddress,
  functionName: "getUser",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"getUserByAddress"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerGetUserByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "getUserByAddress",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"nextApartId"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerNextApartId =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "nextApartId",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"nextCondoId"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerNextCondoId =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "nextCondoId",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"nextRatingId"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerNextRatingId =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "nextRatingId",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"nextRentId"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerNextRentId =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "nextRentId",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"nextShareId"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerNextShareId =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "nextShareId",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"nextUserId"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useReadCondoManagerNextUserId =
  /*#__PURE__*/ createUseReadContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "nextUserId",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManager = /*#__PURE__*/ createUseWriteContract({
  abi: condoManagerAbi,
  address: condoManagerAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addApart"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerAddApart =
  /*#__PURE__*/ createUseWriteContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addApart",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addCondo"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerAddCondo =
  /*#__PURE__*/ createUseWriteContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addCondo",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addRating"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerAddRating =
  /*#__PURE__*/ createUseWriteContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addRating",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addRent"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerAddRent = /*#__PURE__*/ createUseWriteContract(
  {
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addRent",
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addShare"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerAddShare =
  /*#__PURE__*/ createUseWriteContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addShare",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addUser"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerAddUser = /*#__PURE__*/ createUseWriteContract(
  {
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addUser",
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updCondo"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerUpdCondo =
  /*#__PURE__*/ createUseWriteContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updCondo",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updRating"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerUpdRating =
  /*#__PURE__*/ createUseWriteContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updRating",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updRent"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerUpdRent = /*#__PURE__*/ createUseWriteContract(
  {
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updRent",
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updShare"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerUpdShare =
  /*#__PURE__*/ createUseWriteContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updShare",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updUser"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWriteCondoManagerUpdUser = /*#__PURE__*/ createUseWriteContract(
  {
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updUser",
  }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManager = /*#__PURE__*/ createUseSimulateContract({
  abi: condoManagerAbi,
  address: condoManagerAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addApart"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerAddApart =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addApart",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addCondo"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerAddCondo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addCondo",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addRating"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerAddRating =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addRating",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addRent"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerAddRent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addRent",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addShare"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerAddShare =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addShare",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"addUser"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerAddUser =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "addUser",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updCondo"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerUpdCondo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updCondo",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updRating"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerUpdRating =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updRating",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updRent"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerUpdRent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updRent",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updShare"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerUpdShare =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updShare",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link condoManagerAbi}__ and `functionName` set to `"updUser"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useSimulateCondoManagerUpdUser =
  /*#__PURE__*/ createUseSimulateContract({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    functionName: "updUser",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"ApartAdded"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerApartAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "ApartAdded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"CondoAdded"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerCondoAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "CondoAdded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"CondoUpdated"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerCondoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "CondoUpdated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"RatingAdded"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerRatingAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "RatingAdded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"RatingUpdated"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerRatingUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "RatingUpdated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"RentAdded"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerRentAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "RentAdded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"RentUpdated"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerRentUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "RentUpdated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"ShareAdded"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerShareAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "ShareAdded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"ShareUpdated"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerShareUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "ShareUpdated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"UserAdded"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerUserAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "UserAdded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link condoManagerAbi}__ and `eventName` set to `"UserUpdated"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc)
 */
export const useWatchCondoManagerUserUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: condoManagerAbi,
    address: condoManagerAddress,
    eventName: "UserUpdated",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  address: erc721Address,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  address: erc721Address,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  address: erc721Address,
  functionName: "getApproved",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    address: erc721Address,
    functionName: "isApprovedForAll",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  address: erc721Address,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  address: erc721Address,
  functionName: "ownerOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    address: erc721Address,
    functionName: "supportsInterface",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  address: erc721Address,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  address: erc721Address,
  functionName: "tokenURI",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  address: erc721Address,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  address: erc721Address,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    address: erc721Address,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    address: erc721Address,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  address: erc721Address,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
  address: erc721Address,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, address: erc721Address, functionName: "approve" }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    address: erc721Address,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    address: erc721Address,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    address: erc721Address,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
  address: erc721Address,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    address: erc721Address,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    address: erc721Address,
    eventName: "ApprovalForAll",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    address: erc721Address,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newCondoGovernorAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const useWriteNewCondoGovernor = /*#__PURE__*/ createUseWriteContract({
  abi: newCondoGovernorAbi,
  address: newCondoGovernorAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newCondoGovernorAbi}__ and `functionName` set to `"createGovernor"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const useWriteNewCondoGovernorCreateGovernor =
  /*#__PURE__*/ createUseWriteContract({
    abi: newCondoGovernorAbi,
    address: newCondoGovernorAddress,
    functionName: "createGovernor",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newCondoGovernorAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const useSimulateNewCondoGovernor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: newCondoGovernorAbi,
    address: newCondoGovernorAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newCondoGovernorAbi}__ and `functionName` set to `"createGovernor"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const useSimulateNewCondoGovernorCreateGovernor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: newCondoGovernorAbi,
    address: newCondoGovernorAddress,
    functionName: "createGovernor",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link newCondoGovernorAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const useWatchNewCondoGovernorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: newCondoGovernorAbi,
    address: newCondoGovernorAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link newCondoGovernorAbi}__ and `eventName` set to `"NewGovernor"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x7e48665c79F2b56189b5fB25e46D81506B6a28dE)
 */
export const useWatchNewCondoGovernorNewGovernorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: newCondoGovernorAbi,
    address: newCondoGovernorAddress,
    eventName: "NewGovernor",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newCondoNftAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWriteNewCondoNft = /*#__PURE__*/ createUseWriteContract({
  abi: newCondoNftAbi,
  address: newCondoNftAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newCondoNftAbi}__ and `functionName` set to `"createNft"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWriteNewCondoNftCreateNft =
  /*#__PURE__*/ createUseWriteContract({
    abi: newCondoNftAbi,
    address: newCondoNftAddress,
    functionName: "createNft",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newCondoNftAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useSimulateNewCondoNft = /*#__PURE__*/ createUseSimulateContract({
  abi: newCondoNftAbi,
  address: newCondoNftAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newCondoNftAbi}__ and `functionName` set to `"createNft"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useSimulateNewCondoNftCreateNft =
  /*#__PURE__*/ createUseSimulateContract({
    abi: newCondoNftAbi,
    address: newCondoNftAddress,
    functionName: "createNft",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link newCondoNftAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWatchNewCondoNftEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: newCondoNftAbi,
    address: newCondoNftAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link newCondoNftAbi}__ and `eventName` set to `"NewNFT"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x0AA821d84076770E027B317226eC50Fe062dDe30)
 */
export const useWatchNewCondoNftNewNftEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: newCondoNftAbi,
    address: newCondoNftAddress,
    eventName: "NewNFT",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newCondoTimelockAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const useWriteNewCondoTimelock = /*#__PURE__*/ createUseWriteContract({
  abi: newCondoTimelockAbi,
  address: newCondoTimelockAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newCondoTimelockAbi}__ and `functionName` set to `"createTimelock"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const useWriteNewCondoTimelockCreateTimelock =
  /*#__PURE__*/ createUseWriteContract({
    abi: newCondoTimelockAbi,
    address: newCondoTimelockAddress,
    functionName: "createTimelock",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newCondoTimelockAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const useSimulateNewCondoTimelock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: newCondoTimelockAbi,
    address: newCondoTimelockAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newCondoTimelockAbi}__ and `functionName` set to `"createTimelock"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const useSimulateNewCondoTimelockCreateTimelock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: newCondoTimelockAbi,
    address: newCondoTimelockAddress,
    functionName: "createTimelock",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link newCondoTimelockAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const useWatchNewCondoTimelockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: newCondoTimelockAbi,
    address: newCondoTimelockAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link newCondoTimelockAbi}__ and `eventName` set to `"NewTimelock"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe50eB1643C677C7efB944dd266f6431204613a53)
 */
export const useWatchNewCondoTimelockNewTimelockEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: newCondoTimelockAbi,
    address: newCondoTimelockAddress,
    eventName: "NewTimelock",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newCondoVaultAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const useWriteNewCondoVault = /*#__PURE__*/ createUseWriteContract({
  abi: newCondoVaultAbi,
  address: newCondoVaultAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newCondoVaultAbi}__ and `functionName` set to `"createVault"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const useWriteNewCondoVaultCreateVault =
  /*#__PURE__*/ createUseWriteContract({
    abi: newCondoVaultAbi,
    address: newCondoVaultAddress,
    functionName: "createVault",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newCondoVaultAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const useSimulateNewCondoVault = /*#__PURE__*/ createUseSimulateContract(
  { abi: newCondoVaultAbi, address: newCondoVaultAddress }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newCondoVaultAbi}__ and `functionName` set to `"createVault"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const useSimulateNewCondoVaultCreateVault =
  /*#__PURE__*/ createUseSimulateContract({
    abi: newCondoVaultAbi,
    address: newCondoVaultAddress,
    functionName: "createVault",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link newCondoVaultAbi}__
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const useWatchNewCondoVaultEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: newCondoVaultAbi,
    address: newCondoVaultAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link newCondoVaultAbi}__ and `eventName` set to `"NewVault"`
 *
 * [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB)
 */
export const useWatchNewCondoVaultNewVaultEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: newCondoVaultAbi,
    address: newCondoVaultAddress,
    eventName: "NewVault",
  });
