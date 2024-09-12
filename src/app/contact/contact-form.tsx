"use client";

import { useState } from "react";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/24/solid";

enum Status {
  Idle,
  InProgress,
  Success,
  Error,
}

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(Status.Idle);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(Status.InProgress);

    try {
      setStatus(Status.InProgress);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus(Status.Success);
        setEmail("");
        setMessage("");
      } else {
        setStatus(Status.Error);
      }
    } catch (error) {
      setStatus(Status.Error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg border-2 border-white p-8 rounded-lg shadow-md bg-slate-900 bg-opacity-50"
    >
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          className="w-full p-3 border bg-transparent placeholder-gray-300 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="w-full p-3 border bg-transparent placeholder-gray-300 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          rows={5}
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="flex justify-end items-center">
        {status == Status.Error && (
          <p className="mr-4 text-center text-sm text-red-600">
            Something went wrong!
          </p>
        )}
        {status == Status.InProgress && (
          <ArrowPathIcon width={24} height={24} className="animate-spin mr-4" />
        )}
        {status == Status.Success && (
          <CheckIcon width={24} height={24} className="mr-4 text-green-400" />
        )}

        <button
          type="submit"
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
        >
          Send
        </button>
      </div>
    </form>
  );
}
