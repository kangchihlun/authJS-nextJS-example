import React from "react";
import ServerComponent from "@/components/ServerComponent";

export default function Home() {
  return (
    <>
      <h1 className="mb-5 text-center">This is home page</h1>
      <div className="flex flex-col gap-5 ">
        <ServerComponent></ServerComponent>
      </div>
    </>
  );
}
