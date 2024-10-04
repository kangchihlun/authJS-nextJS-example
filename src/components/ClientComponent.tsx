"use client";
import { useSession } from "next-auth/react";
import React from "react";

function ClientComponent() {
  const session = useSession();
  const [count, setCount] = React.useState(0);

  if (session.status === "unauthenticated") {
    return null;
  }

  return (
    <div className="text-center max-w-[300px] mx-auto bg-slate-800 p-2 rounded-md w-full">
      <h1 className="mb-2">This is Client component</h1>
      <div className="bg-slate-900 p-2 rounded-md">
        <h1>This is protected data</h1>
        <p>Name: {session.data?.user?.name}</p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default ClientComponent;
