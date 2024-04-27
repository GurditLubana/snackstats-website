"use client";

import { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const sendResponse = await fetch("/api/reportData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      });

      if (!sendResponse.ok) {
        throw new Error("Something went wrong");
      }
     
      router.push('/dashboard')
    } catch (error) {
      console.error("Failed to send data:", error);
    }
  };

  return (
    <main className="dark-bg flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter some text"
          id="inputElement"
        />
        <button id="submitBtn" type="submit" >Submit</button>
      </form>
    </main>
  );
}
