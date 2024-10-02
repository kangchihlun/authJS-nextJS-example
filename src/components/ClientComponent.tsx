"use client";
import React from "react";

function ClientComponent() {
  return (
    <div className="text-center max-w-[300px] mx-auto bg-slate-800 p-2 rounded-md w-full">
      <h1 className="mb-2">This is Client component</h1>
      <div className="bg-slate-900 p-2 rounded-md">
        <h1>This is protected data</h1>
      </div>
    </div>
  );
}

export default ClientComponent;
