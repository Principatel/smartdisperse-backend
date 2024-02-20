"use client";
import { useState } from "react";

export default function Page() {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");

  const handlesubmit = async () => {
    console.log("submit function entered");
    console.log(name, address);
    const alldatas = {
      name: name,
      address: address,
    };
    console.log("try block entering");
    try {
      let result = await fetch(`http://localhost:3000/api/sd`, {
        method: "POST",
        body: JSON.stringify(alldatas),
      });
      result = await result.json();
      console.log("result", result);
      if (result.success) {
        alert("Added to MongoDB");
      }
      console.log("Data added");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-center">
      <div className="text-3xl my-20">User Data Form</div>
      <div className="flex flex-col items-center">
        <input
          className="border-2 border-gray-900 rounded-md my-5"
          type="text"
          placeholder=" Enter Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input
          className="border-2 border-gray-900 rounded-md my-5"
          type="text"
          placeholder=" Enter Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        <button
          className="border-2 border-gray-900 rounded-md p-1.5"
          onClick={handlesubmit}
        >
          Submit Data
        </button>
      </div>
    </div>
  );
}
