"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [convoHistory, setConvoHistory] = useState([]);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleResponse = () => {};

  return (
    <>
      <div className="flex flex-col h-screen bg-zinc-900">
        {/* chat logic */}

        <div className="flex items-center p-4 bg-zinc-900 ">
          <input
            type="text"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            className="flex-1 p-2 me-2 border bg-zinc-800 border-zinc-900 text-white rounded-l-md focus:outline-none focus:ring-2 "
          />
          <button
            className="p-2 bg-neutral-100 text-black rounded-md "
            onClick={handleResponse}
          >
            Generate Response
          </button>
        </div>
      </div>
    </>
  );
}
