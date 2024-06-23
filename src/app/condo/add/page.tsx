"use client";

import {
  condoManagerAddress,
  useWatchCondoManagerApartAddedEvent,
  useWatchCondoManagerCondoAddedEvent,
  useWatchNewCondoGovernorNewGovernorEvent,
  useWatchNewCondoNftNewNftEvent,
  useWatchNewCondoTimelockNewTimelockEvent,
  useWatchNewCondoVaultNewVaultEvent,
  useWriteCondoManagerAddApart,
  useWriteCondoManagerAddCondo,
  useWriteNewCondoGovernorCreateGovernor,
  useWriteNewCondoNftCreateNft,
  useWriteNewCondoTimelockCreateTimelock,
  useWriteNewCondoVaultCreateVault,
} from "@/generated";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Address } from "viem/accounts";
import { useWaitForTransactionReceipt } from "wagmi";

export default function AddCondo() {
  const [tokenAddress, setTokenAddress] = useState<Address>();
  const [timelock, setTimelock] = useState<Address>();
  const [governor, setGovernor] = useState<Address>();
  const [vault, setVault] = useState<Address>();

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [apartments, setApartments] = useState<bigint[][]>([[0n, 0n, 0n]]);

  const [condoId, setCondoId] = useState<bigint>(1n);
  const [floor, setFloor] = useState<bigint>(1n);
  const [apartment, setApartment] = useState<bigint>(1n);

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingNFT, setLoadingNFT] = useState(false);
  const [loadingTimelock, setLoadingTimelock] = useState(false);
  const [loadingGovernor, setLoadingGovernor] = useState(false);
  const [loadingVault, setLoadingVault] = useState(false);
  const [loadingCondo, setLoadingCondo] = useState(false);

  const { writeContract: addCondo, data: addCondoHash } =
    useWriteCondoManagerAddCondo();
  const { writeContract: createNft, data: createNftHash } =
    useWriteNewCondoNftCreateNft();
  const { writeContract: createTimelock, data: createTimelockHash } =
    useWriteNewCondoTimelockCreateTimelock();
  const { writeContract: createGovernor, data: createGovernorHash } =
    useWriteNewCondoGovernorCreateGovernor();
  const { writeContract: createVault, data: createVaultHash } =
    useWriteNewCondoVaultCreateVault();
  const { writeContract: addApart, data: addApartHash } =
    useWriteCondoManagerAddApart();

  useWatchCondoManagerCondoAddedEvent({
    onLogs(logs) {
      console.log("New logs!", logs);
      setLoading(false);
      setLoadingCondo(false);
      setModalVisible(false);
    },
  });

  useWatchNewCondoNftNewNftEvent({
    onLogs(logs) {
      console.log("New logs!", logs);
      setTokenAddress(logs[0].args.condoNFT);
      setLoading(false);
      setLoadingNFT(false);
    },
  });

  useWatchNewCondoTimelockNewTimelockEvent({
    onLogs(logs) {
      console.log("New logs!", logs);
      setTimelock(logs[0].args.timelock);
      setLoading(false);
      setLoadingTimelock(false);
    },
  });

  useWatchNewCondoGovernorNewGovernorEvent({
    onLogs(logs) {
      console.log("New logs!", logs);
      setGovernor(logs[0].args.governor);
      setLoading(false);
      setLoadingGovernor(false);
    },
  });

  useWatchNewCondoVaultNewVaultEvent({
    onLogs(logs) {
      console.log("New logs!", logs);
      setVault(logs[0].args.vault);
      setLoading(false);
      setLoadingVault(false);
    },
  });

  useWatchCondoManagerApartAddedEvent({
    onLogs(logs) {
      console.log("New logs!", logs);
    },
  });

  const resultAddCondoHash = useWaitForTransactionReceipt({
    hash: addCondoHash,
  });
  const resultCreateNftHash = useWaitForTransactionReceipt({
    hash: createNftHash,
  });
  const resultCreateTimelockHash = useWaitForTransactionReceipt({
    hash: createTimelockHash,
  });
  const resultCreateGovernorHash = useWaitForTransactionReceipt({
    hash: createGovernorHash,
  });
  const resultCreateVaultHash = useWaitForTransactionReceipt({
    hash: createVaultHash,
  });
  const resultAddApartHash = useWaitForTransactionReceipt({
    hash: addApartHash,
  });

  useEffect(() => {
    console.log("result.data?.logs", resultAddCondoHash.data?.logs);
  }, [resultAddCondoHash.data?.logs]);

  useEffect(() => {
    console.log("result.data?.logs", resultCreateNftHash.data?.logs);
    setTokenAddress(resultCreateNftHash.data?.logs[0].address);
    setLoading(false);
    setLoadingNFT(false);
  }, [resultCreateNftHash.data?.logs]);

  useEffect(() => {
    console.log("result.data?.logs", resultCreateTimelockHash.data?.logs);
    setTimelock(resultCreateTimelockHash.data?.logs[0].address);
    setLoading(false);
    setLoadingTimelock(false);
  }, [resultCreateTimelockHash.data?.logs]);

  useEffect(() => {
    console.log("result.data?.logs", resultCreateGovernorHash.data?.logs);
    setGovernor(resultCreateGovernorHash.data?.logs[0].address);
    setLoading(false);
    setLoadingGovernor(false);
  }, [resultCreateGovernorHash.data?.logs]);

  useEffect(() => {
    console.log("result.data?.logs", resultCreateVaultHash.data?.logs);
    setVault(resultCreateVaultHash.data?.logs[0].address);
    setLoading(false);
    setLoadingVault(false);
  }, [resultCreateVaultHash.data?.logs]);

  useEffect(() => {
    console.log("result.data?.logs", resultAddApartHash.data?.logs);
  }, [resultAddApartHash.data?.logs]);

  const handleAddCondo = useCallback(() => {
    if (!tokenAddress || !timelock || !governor || !vault) return;
    setLoading(true);
    setLoadingCondo(true);
    addCondo({
      args: [tokenAddress, timelock, governor, vault],
    });
  }, [tokenAddress, timelock, governor, vault, addCondo]);

  const handleCreateNft = useCallback(() => {
    if (!name || !symbol || !apartments) return;
    setLoading(true);
    setLoadingNFT(true);
    createNft({
      args: [condoManagerAddress[534351], name, symbol, apartments],
    });
  }, [createNft, name, symbol, apartments]);

  const handleCreateTimelock = useCallback(() => {
    setLoading(true);
    setLoadingTimelock(true);
    createTimelock({});
  }, [createTimelock]);

  const handleCreateGovernor = useCallback(() => {
    if (!tokenAddress || !timelock) return;
    setLoading(true);
    setLoadingGovernor(true);
    createGovernor({ args: [tokenAddress, timelock] });
  }, [createGovernor, timelock, tokenAddress]);

  const handleCreateVault = useCallback(() => {
    if (!timelock) return;
    setLoading(true);
    setLoadingVault(true);
    createVault({ args: [timelock] });
  }, [createVault, timelock]);

  const handleAddApart = useCallback(() => {
    if (!condoId || !floor || !apartment) return;
    setLoading(true);
    addApart({
      args: [condoId, floor, apartment],
      value: 1n,
    });
  }, [condoId, floor, apartment, addApart]);

  const handleAddApartment = () => {
    setApartments([...apartments, [0n, 0n, 0n]]);
  };

  const handleRemoveApartment = (index: number) => {
    const newApartments = apartments.filter((_, i) => i !== index);
    setApartments(newApartments);
  };

  const handleApartmentChange = (
    index: number,
    field: number,
    value: string
  ) => {
    const newApartments = apartments.map((apartment, i) =>
      i === index
        ? apartment.map((fieldValue, j) =>
            j === field ? BigInt(value) : fieldValue
          )
        : apartment
    );
    setApartments(newApartments);
  };

  return (
    <div className="mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-md w-full h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Condo</h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400">
            Name
          </label>
          <input
            type="text"
            placeholder="Condo Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full bg-gray-800 text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400">
            Symbol
          </label>
          <input
            type="text"
            placeholder="Condo Symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="input input-bordered w-full bg-gray-800 text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400">
            Apartments
          </label>
          {apartments.map((apartment, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="number"
                placeholder="Floor Number"
                value={apartment[0].toString()}
                onChange={(e) =>
                  handleApartmentChange(index, 0, e.target.value)
                }
                className="input input-bordered w-1/3 bg-gray-800 text-white"
              />
              <input
                type="number"
                placeholder="Apartment Number"
                value={apartment[1].toString()}
                onChange={(e) =>
                  handleApartmentChange(index, 1, e.target.value)
                }
                className="input input-bordered w-1/3 bg-gray-800 text-white"
              />
              <input
                type="number"
                placeholder="Apartment Price"
                value={apartment[2].toString()}
                onChange={(e) =>
                  handleApartmentChange(index, 2, e.target.value)
                }
                className="input input-bordered w-1/3 bg-gray-800 text-white"
              />
              <button
                className="btn btn-error"
                onClick={() => handleRemoveApartment(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="btn btn-primary w-full"
            onClick={handleAddApartment}
          >
            Add Apartment
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <button
          className="btn btn-primary"
          onClick={() => setModalVisible(true)}
        >
          Create Condo DAO
        </button>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <button className="btn btn-primary" onClick={() => handleAddApart()}>
          Buy Apart
        </button>
      </div>

      {loading && (
        <div className="flex justify-center mt-6">
          <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
        </div>
      )}

      {modalVisible && (
        <div className="modal modal-open">
          <div className="modal-box bg-gray-800 text-white">
            <h2 className="font-bold text-lg text-center">Create Condo DAO</h2>
            <div className="space-y-4 mt-4">
              <button
                className="btn btn-primary w-full flex items-center justify-center"
                onClick={handleCreateNft}
              >
                {loadingNFT ? (
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                ) : tokenAddress ? (
                  tokenAddress
                ) : (
                  "Create NFT"
                )}
              </button>
              <button
                className="btn btn-primary w-full flex items-center justify-center"
                onClick={handleCreateTimelock}
              >
                {loadingTimelock ? (
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                ) : timelock ? (
                  timelock
                ) : (
                  "Create Timelock"
                )}
              </button>
              <button
                className="btn btn-primary w-full flex items-center justify-center"
                onClick={handleCreateGovernor}
              >
                {loadingGovernor ? (
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                ) : governor ? (
                  governor
                ) : (
                  "Create Governor"
                )}
              </button>
              <button
                className="btn btn-primary w-full flex items-center justify-center"
                onClick={handleCreateVault}
              >
                {loadingVault ? (
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                ) : vault ? (
                  vault
                ) : (
                  "Create Vault"
                )}
              </button>
              <button
                className={`btn btn-primary w-full flex items-center justify-center ${!tokenAddress || !timelock || !governor || !vault ? `opacity-45` : ``}`}
                onClick={handleAddCondo}
              >
                {loadingCondo ? (
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                ) : (
                  "Add Condo"
                )}
              </button>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setModalVisible(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
