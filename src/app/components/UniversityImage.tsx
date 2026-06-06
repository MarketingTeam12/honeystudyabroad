import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface UniversityImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function UniversityImage({ src, alt, className = '' }: UniversityImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const defaultFallbackImage = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=85';

  const handleError = () => {
    if (!imageError) {
      setImageError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative bg-gray-100 ${className}`}>
      {isLoading && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
          <Building2 className="w-12 h-12 text-blue-300 opacity-50" />
        </div>
      )}

      {imageError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="text-center">
            <Building2 className="w-16 h-16 text-blue-300 mx-auto mb-2" />
            <p className="text-xs text-blue-400 font-medium">University Campus</p>
          </div>
        </div>
      ) : (
        <img
          src={imageError ? defaultFallbackImage : src}
          alt={alt}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
          onError={handleError}
          onLoad={handleLoad}
          loading="lazy"
        />
      )}
    </div>
  );
}
