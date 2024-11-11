"use client";
const Loading = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center z-[100] bg-black">
      <style jsx>{`
        .loader-container {
          position: relative;
          width: 150px;
          height: 150px;
        }

        .loader {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 16px solid transparent;
          border-radius: 50%;
          border-top: 16px solid #3498db;
          animation: pulseLoader 1.5s infinite;
        }

        @keyframes pulseLoader {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.9);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
