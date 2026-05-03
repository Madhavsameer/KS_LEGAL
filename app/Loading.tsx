export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">

      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-4 text-gray-400">
          Loading...
        </p>
      </div>

    </div>
  );
}