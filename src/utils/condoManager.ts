// /src/utils/condoManager.ts
import { abi } from "@/utils/CondoManager.json";
import { useReadContract, useWriteContract } from "wagmi";

const address = "0xYourContractAddress" as `0x${string}`;

export const getCondo = (condoId: number) => {
  return useReadContract({
    address,
    abi,
    functionName: "getCondo",
    args: [condoId],
  });
};

export const useAddCondo = (
  name: string,
  symbol: string,
  apartments: number[][]
) => {
  const { writeContract } = useWriteContract();
  writeContract({
    address,
    abi,
    functionName: "addCondo",
    args: [name, symbol, apartments],
  });
};

export const useUpdCondo = (condoId: number, status: number) => {
  const { writeContract } = useWriteContract();
  writeContract({
    address,
    abi,
    functionName: "updCondo",
    args: [condoId, status],
  });
};
