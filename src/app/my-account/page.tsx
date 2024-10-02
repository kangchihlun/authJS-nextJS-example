import React from "react";

function page() {
  const userInfo = {
    name: "John",
    email: "john@example.com",
  };
  return (
    <>
      <div>This is my account page</div>
      <pre className="bg-slate-900 p-2 rounded-md">
        {JSON.stringify(userInfo, null, 2)}
      </pre>
    </>
  );
}

export default page;
