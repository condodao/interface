// /src/app/condo/upd/page.tsx
"use client";

import { useState } from "react";
import { useUpdCondo } from "../../../utils/condoManager";

export default function UpdateCondo() {
  const [condoId, setCondoId] = useState("");
  const [status, setStatus] = useState("");

  const updateCondo = useUpdCondo(parseInt(condoId), parseInt(status));

  const handleUpdateCondo = async () => {
    updateCondo.write();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Condo</h1>
      <input
        type="text"
        className="input input-bordered w-full mb-4"
        placeholder="Condo ID"
        value={condoId}
        onChange={(e) => setCondoId(e.target.value)}
      />
      <input
        type="text"
        className="input input-bordered w-full mb-4"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleUpdateCondo}>
        Update Condo
      </button>
    </div>
  );
}
