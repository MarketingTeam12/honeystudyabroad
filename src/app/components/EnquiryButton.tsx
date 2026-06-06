import { Mail } from 'lucide-react';

interface EnquiryButtonProps {
  onClick: () => void;
}

export function EnquiryButton({ onClick }: EnquiryButtonProps) {
  return (
    <div className="fixed left-4 md:left-6 bottom-6 z-50">
      {/* Container for button and pulse effect */}
      <div className="relative inline-block">
        {/* Main Button */}
        <button
          onClick={onClick}
          className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5 group overflow-visible"
          style={{ isolation: 'isolate' }}
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-5 h-5">
            <Mail className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
          </div>

          {/* Text */}
          <span className="font-semibold text-sm whitespace-nowrap">Send Enquiry</span>

          {/* Notification Badge - Positioned outside button */}
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </button>

        {/* Pulse Ring Animation */}
        <div className="absolute inset-0 bg-[#f5f5fb]0 rounded-full animate-ping opacity-20 pointer-events-none"></div>
      </div>
    </div>
  );
}
