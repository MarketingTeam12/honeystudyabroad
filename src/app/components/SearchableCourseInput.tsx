import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

// Popular courses with their IDs for navigation
const COURSE_OPTIONS = [
  // Online Courses
  { id: 'online-mba', title: 'MBA', fullName: 'Master of Business Administration (Online)', category: 'Online' },
  { id: 'online-bca', title: 'BCA', fullName: 'Bachelor of Computer Applications (Online)', category: 'Online' },

  // Campus Courses
  { id: 'campus-btech', title: 'B.Tech', fullName: 'Bachelor of Technology (Engineering)', category: 'Campus' },
  { id: 'campus-mbbs', title: 'MBBS', fullName: 'Bachelor of Medicine, Bachelor of Surgery', category: 'Campus' },

  // Additional popular searches
  { id: 'course-bcom', title: 'B.Com', fullName: 'Bachelor of Commerce', category: 'Popular' },
  { id: 'course-bba', title: 'BBA', fullName: 'Bachelor of Business Administration', category: 'Popular' },
  { id: 'course-mca', title: 'MCA', fullName: 'Master of Computer Applications', category: 'Popular' },
  { id: 'course-mtech', title: 'M.Tech', fullName: 'Master of Technology', category: 'Popular' },
  { id: 'course-bsc', title: 'B.Sc', fullName: 'Bachelor of Science', category: 'Popular' },
  { id: 'course-msc', title: 'M.Sc', fullName: 'Master of Science', category: 'Popular' },
  { id: 'course-llb', title: 'LLB', fullName: 'Bachelor of Laws', category: 'Popular' },
  { id: 'course-ba', title: 'BA', fullName: 'Bachelor of Arts', category: 'Popular' },
];

interface SearchableCourseInputProps {
  placeholder?: string;
  className?: string;
}

export function SearchableCourseInput({
  placeholder = 'Search courses…',
  className = '',
}: SearchableCourseInputProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter courses based on search query
  const filtered = search.trim()
    ? COURSE_OPTIONS.filter(
        (course) =>
          course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.fullName.toLowerCase().includes(search.toLowerCase()) ||
          course.category.toLowerCase().includes(search.toLowerCase())
      )
    : COURSE_OPTIONS;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleCourseSelect(courseId: string) {
    // Navigate to the course detail page using hash-based routing
    if (courseId && typeof window !== 'undefined') {
      window.location.hash = courseId;
      setSearch('');
      setOpen(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value || '';
    setSearch(value);
    setOpen(value.length > 0);
  }

  function handleInputFocus() {
    if (search.trim().length > 0) {
      setOpen(true);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false);
      inputRef.current?.blur();
    } else if (e.key === 'Enter' && filtered.length > 0) {
      // Navigate to first result on Enter
      handleCourseSelect(filtered[0].id);
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className || ''}`}>
      {/* Search input */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
        <input
          ref={inputRef}
          type="search"
          value={search}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-9 pr-4 py-2 text-[13px] border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#2b2d72]/20 focus:border-[#2b2d72] focus:bg-white w-44 transition-all"
        />
      </div>

      {/* Dropdown suggestions */}
      {open && filtered && filtered.length > 0 && (
        <div className="absolute z-50 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
          <ul className="max-h-80 overflow-y-auto py-1.5">
            {filtered.map((course) => (
              <li key={course.id}>
                <button
                  type="button"
                  onClick={() => handleCourseSelect(course.id)}
                  className="w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-800 group-hover:text-[#2b2d72] transition-colors">
                        {course.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {course.fullName}
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full mt-0.5">
                      {course.category}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Empty state */}
      {open && search.trim() && filtered.length === 0 && (
        <div className="absolute z-50 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
          <div className="px-4 py-6 text-center">
            <div className="text-sm text-gray-400 mb-1">No courses found</div>
            <div className="text-xs text-gray-400">Try searching for MBA, BCA, B.Tech, etc.</div>
          </div>
        </div>
      )}
    </div>
  );
}
