import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    react(),
    foundry({
      project: "../v1-core",
      deployments: {
        CondoManager: {
          534351: "0xd56430B5b358D2de6AAAa752f2975c4BB2E5f4Cc",
        },
        NewCondoNFT: {
          534351: "0x0AA821d84076770E027B317226eC50Fe062dDe30",
        },
        NewCondoTimelock: {
          534351: "0xe50eB1643C677C7efB944dd266f6431204613a53",
        },
        NewCondoGovernor: {
          534351: "0x7e48665c79F2b56189b5fB25e46D81506B6a28dE",
        },
        NewCondoVault: {
          534351: "0xFD7fC6fEF2c2f811bd7BedA641607E5CB9CB53fB",
        },
        ERC721: {
          534351: "0x0AA821d84076770E027B317226eC50Fe062dDe30",
        },
      },
      include: [
        "CondoManager.sol/CondoManager.json",
        "NewCondoNFT.sol/NewCondoNFT.json",
        "NewCondoTimelock.sol/NewCondoTimelock.json",
        "NewCondoGovernor.sol/NewCondoGovernor.json",
        "NewCondoVault.sol/NewCondoVault.json",
        "ERC721.sol/ERC721.json",
      ],
    }),
  ],
});
