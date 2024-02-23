"use client";
import { useState, useEffect } from "react";
export default function Page() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [userData, setUserData] = useState([]);
  const [fetchUserId, setFetchUserId] = useState(""); // State to store the user ID for fetching details

  const handleSubmit = async () => {
    const userData = {
      userid: id,
      name: name,
      address: address,
    };
    try {
      let result = await fetch(`http://localhost:3000/api/sd`, {
        method: "POST",
        body: JSON.stringify(userData),
      });

      result = await result.json();
      console.log("Result after submission:", result);
      if (result.success) {
        alert("Added to MongoDB");
        setName("");
        setAddress("");
        setId("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFetchUserDetails = async () => {
    try {
      const result = await fetch(`http://localhost:3000/api/sd`);
      const response = await result.json();
      console.log("Response from API:", response);
      const usersData = response.result;
      if (Array.isArray(usersData)) {
        const matchingUsers = usersData.filter(
          (user) => user.userid === fetchUserId
        );
        if (matchingUsers.length > 0) {
          console.log("Matching users found:", matchingUsers);
          setUserData(matchingUsers);
        } else {
          console.log("No matching users found.");
          setUserData([]);
        }
      } else {
        console.error("Invalid data format received from API.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="text-center">
      <div className="wave-group">
        <input required type="text" className="input" />
        <span className="bar"></span>
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            N
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            a
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            m
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            e
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input required type="text" className="input" />
        <span className="bar"></span>
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            N
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            a
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            m
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            e
          </span>
        </label>
      </div>
      <div>cb</div>
      <div className="text-3xl my-20">User Data Form</div>
      <div className="flex flex-col items-center">
        <input
          className="border-2 border-gray-900 rounded-md my-5"
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="border-2 border-gray-900 rounded-md my-5"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 border-gray-900 rounded-md my-5"
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="border-2 border-gray-900 rounded-md p-1.5"
          onClick={handleSubmit}
        >
          Submit Data
        </button>
      </div>

      <div
        className="mt-10 flex justify-center items-center
      "
      >
        <h2 className="text-xl font-bold">Fetch User Details</h2>
        <div className="flex items-center">
          <input
            className="border-2 border-gray-900 rounded-md my-5"
            type="text"
            placeholder="Enter User ID to fetch details"
            value={fetchUserId}
            onChange={(e) => setFetchUserId(e.target.value)}
          />
          <button
            className="border-2 border-gray-900 rounded-md p-1.5 ml-2"
            onClick={handleFetchUserDetails}
          >
            Fetch Details
          </button>
        </div>
      </div>

      {userData.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold">User Data:</h2>
          <ul>
            {userData.map((user, index) => (
              <li key={index}>
                {/* <p>User ID: {user.userid}</p> */}
                <p>Name: {user.name}</p>
                <p>Address: {user.address}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
