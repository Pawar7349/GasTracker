import { GasCard } from "../components/GasCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-20">
      {/* Main container for GasCard */}
      <main className="max-w-4xl mx-auto text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
          Gas Tracker Dashboard
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Stay updated with the latest gas prices and transaction fees in real-time.
        </p>

        {/* Card Section */}
        <div className="flex justify-center sm:justify-start">
          <GasCard />
        </div>

        {/* Additional Info */}
        <ol className="mt-8 list-decimal list-inside text-gray-600 font-medium text-left">
          <li>Track gas fees for Ethereum and other blockchains.</li>
          <li>Real-time data updated frequently.</li>
          <li>Compare fees across multiple platforms.</li>
        </ol>
      </main>
    </div>
  );
}
