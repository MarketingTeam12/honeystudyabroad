import { X, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const handleCallClick = () => {
    window.location.href = 'tel:+917299005577';
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 transition-all flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6">
          {/* Icon */}
          <div className="w-14 h-14 bg-gradient-to-br from-[#2b2d72] to-[#1e40af] rounded-xl flex items-center justify-center mx-auto mb-4">
            <Phone className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#2b2d72] text-center mb-2">
            Talk to Our Expert
          </h3>
          <p className="text-sm text-gray-500 text-center mb-6">
            Get personalized guidance for your study abroad journey
          </p>

          {/* Phone Number */}
          <div className="bg-blue-50 rounded-lg p-4 mb-4 text-center">
            <div className="text-xs text-gray-500 mb-1">Call us directly</div>
            <div className="text-2xl font-bold text-[#2b2d72] flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              +91 7299005577
            </div>
          </div>

          {/* Call Button */}
          <button
            onClick={handleCallClick}
            className="w-full bg-gradient-to-r from-[#2b2d72] to-[#1e40af] text-white py-3 rounded-lg font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </button>

          {/* Additional Info */}
          <p className="text-xs text-center text-gray-400 mt-4">
            Available Mon-Sat, 9 AM - 6 PM IST
          </p>
        </div>
      </div>
    </div>
  );
}
