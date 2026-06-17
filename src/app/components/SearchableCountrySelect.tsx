import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export const COUNTRY_OPTIONS = [
  { value: 'USA', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Germany', label: 'Germany' },
  { value: 'France', label: 'France' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'New Zealand', label: 'New Zealand' },
  { value: 'Ireland', label: 'Ireland' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Dubai', label: 'Dubai (UAE)' },
  { value: 'Other', label: 'Other' },
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

  const selectedOption = options.find((option) => option.value === value);

  const filtered = search.trim()
    ? options.filter(
        (option) =>
          option.label.toLowerCase().includes(search.toLowerCase()) ||
          option.value.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      setOpen(false);
      setSearch('');
    }
  }

  const isBlue = variant === 'blue';
  const triggerStyles = isBlue
    ? 'border-2 border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm hover:border-blue-300 focus-within:border-[#1A73E8] focus-within:ring-2 focus-within:ring-[#1A73E8]/20'
    : 'border border-gray-200 rounded-lg bg-white hover:border-gray-300 focus-within:border-[#2b2d72] focus-within:ring-2 focus-within:ring-[#2b2d72]/20';
  const textColor = isBlue ? 'text-[#0A2472] font-medium' : 'text-gray-700';
  const placeholderColor = isBlue ? 'text-blue-400/60' : 'text-gray-400';
  const padding = isBlue ? 'px-4 py-3' : 'px-3 py-2';

  return (
    <div ref={containerRef} className={`relative ${className}`}>
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

      <div
        onClick={handleOpen}
        className={`flex w-full cursor-text items-center transition-all ${triggerStyles}`}
      >
        {open ? (
          <>
            <Search className="ml-3 h-4 w-4 shrink-0 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type to search..."
              className={`flex-1 bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-gray-400 ${textColor}`}
            />
          </>
        ) : (
          <span className={`flex-1 truncate ${padding} text-sm ${value ? textColor : placeholderColor}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        )}
        <ChevronDown
          className={`mr-3 h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </div>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-1 duration-200">
          <ul className="max-h-60 overflow-y-auto py-1.5">
            {filtered.length > 0 ? (
              filtered.map((option) => (
                <li
                  key={option.value}
                  onMouseDown={() => handleSelect(option)}
                  className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                    option.value === value
                      ? 'bg-[#2b2d72]/10 font-semibold text-[#2b2d72]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-center text-sm italic text-gray-400">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
