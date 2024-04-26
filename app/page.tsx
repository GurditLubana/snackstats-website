"use client";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Server response:", data);
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
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
