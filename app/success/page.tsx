"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

interface SessionData {
  id: string;
  amount_total: number;
  currency: string;
  status: string;
}

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<SessionData | null>(null);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data: SessionData) => {
          setSession(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Session Fetch Error:", error);
          setLoading(false);
        });
    }
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      {loading ? (
        <h2 className="text-2xl font-bold text-green-700">Processing...</h2>
      ) : (
        <div className="text-center flex flex-col items-center gap-4"> 
          <h1 className="text-4xl font-bold text-green-700">Payment Successful! 🎉</h1>
          <p className="text-xl mt-4">Thank you for your purchase.</p>
          {session && <p className="text-md mt-2">Order ID: {session.id}</p>}

          <Link
            href="/"
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
}
