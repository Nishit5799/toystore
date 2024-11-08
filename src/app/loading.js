"use client";
export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center z-[100] bg-black">
      <h2 className="text-xl text-white font-semibold">FunToy World...</h2>
      <div className="flex justify-center items-center mt-5">
        <div className="loader"></div>
      </div>

      <style jsx>{`
        .loader {
          border: 16px solid #f3f3f3;
          border-radius: 50%;
          border-top: 16px solid #3498db;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
