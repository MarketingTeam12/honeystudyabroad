import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export const COUNTRY_OPTIONS = [
  { value: 'USA', label: '🇺🇸 United States' },
  { value: 'UK', label: '🇬🇧 United Kingdom' },
  { value: 'Canada', label: '🇨🇦 Canada' },
  { value: 'Australia', label: '🇦🇺 Australia' },
  { value: 'Germany', label: '🇩🇪 Germany' },
  { value: 'France', label: '🇫🇷 France' },
  { value: 'Singapore', label: '🇸🇬 Singapore' },
  { value: 'New Zealand', label: '🇳🇿 New Zealand' },
  { value: 'Ireland', label: '🇮🇪 Ireland' },
  { value: 'Europe', label: '🌍 Europe' },
  { value: 'Dubai', label: '🇦🇪 Dubai (UAE)' },
  { value: 'Other', label: '🌐 Other' },
];

interface SearchableCountrySelectProps {
  name?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  placeholder?: string;
  variant?: 'default' | 'blue';
  options?: { value: string; label: string }[];
}

export function SearchableCountrySelect({
  name,
  value,
  onChange,
  required,
  className = '',
  placeholder = 'Select or type country...',
  variant = 'default',
  options = COUNTRY_OPTIONS,
}: SearchableCountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  // Filter options based on search query
  const filtered = search.trim()
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(search.toLowerCase()) ||
          o.value.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when dropdown opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  function handleOpen() {
    setOpen(true);
    setSearch('');
  }

  function handleSelect(option: { value: string; label: string }) {
    onChange(option.value);
    setOpen(false);
    setSearch('');
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false);
      setSearch('');
    }
  }

  const isBlue = variant === 'blue';

  // Styling variants
  const triggerStyles = isBlue
    ? 'border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm hover:border-blue-300 focus-within:border-[#1A73E8] focus-within:ring-2 focus-within:ring-[#1A73E8]/20'
    : 'border border-gray-200 rounded-lg bg-white hover:border-gray-300 focus-within:border-[#2b2d72] focus-within:ring-2 focus-within:ring-[#2b2d72]/20';

  const textColor = isBlue ? 'text-[#0A2472] font-medium' : 'text-gray-700';
  const placeholderColor = isBlue ? 'text-blue-400/60' : 'text-gray-400';
  const padding = isBlue ? 'px-4 py-3' : 'px-3 py-2';

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Hidden input for form validation */}
      {name && (
        <input
          type="text"
          name={name}
          value={value}
          required={required}
          readOnly
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}

      {/* Trigger button */}
      <div
        onClick={handleOpen}
        className={`flex items-center w-full cursor-text transition-all ${triggerStyles}`}
      >
        {open ? (
          <>
            <Search className="shrink-0 w-4 h-4 text-gray-400 ml-3" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type to search..."
              className={`flex-1 px-2 py-2.5 text-sm outline-none bg-transparent placeholder:text-gray-400 ${textColor}`}
            />
          </>
        ) : (
          <span className={`flex-1 ${padding} text-sm truncate ${value ? textColor : placeholderColor}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        )}
        <ChevronDown
          className={`shrink-0 w-4 h-4 mr-3 text-gray-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
          <ul className="max-h-60 overflow-y-auto py-1.5">
            {filtered.length > 0 ? (
              filtered.map((option) => (
                <li
                  key={option.value}
                  onMouseDown={() => handleSelect(option)}
                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                    option.value === value
                      ? 'bg-[#2b2d72]/10 text-[#2b2d72] font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-sm text-gray-400 text-center italic">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
