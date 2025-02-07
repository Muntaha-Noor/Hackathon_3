import Link from "next/link";

export default function CancelPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-100">
        <h1 className="text-4xl font-bold text-red-700">Payment Cancelled ❌</h1>
        <p className="text-xl mt-4">Your payment was not completed.</p>
        <Link href="/" className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg">Try Again</Link>
      </div>
    );
  }
  