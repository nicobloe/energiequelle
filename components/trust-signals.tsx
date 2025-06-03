import Image from "next/image"

export default function TrustSignals() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 bg-white/10 backdrop-blur-sm py-3 px-4 rounded-lg">
      <div className="flex items-center">
        <Image
          src="/images/zinzino-independent-partner-logo-black.png"
          alt="Offizieller Zinzino Partner"
          width={120}
          height={40}
          className="h-8 w-auto object-contain bg-white rounded-md px-1"
          unoptimized={true}
        />
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <span className="text-white text-sm">5+ Jahre Erfahrung</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white/20 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <span className="text-white text-sm">Wissenschaftlich fundiert</span>
        </div>
      </div>
    </div>
  )
}
