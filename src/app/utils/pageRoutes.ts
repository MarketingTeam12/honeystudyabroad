// Page route mapping for optimized navigation
export const PAGE_ROUTES: Record<string, string> = {
  'canada-page': 'canada',
  'uk-page': 'uk',
  'usa-page': 'usa',
  'australia-page': 'australia',
  'singapore-page': 'singapore',
  'germany-page': 'germany',
  'france-page': 'france',
  'india-page': 'india',
  'new-zealand-page': 'new-zealand',
  'ireland-page': 'ireland',
  'europe-page': 'europe',
  'online-admission': 'online-admission',
  'campus-admission': 'campus-admission',
  'visa-assistance': 'visa-assistance',
  'university-admissions': 'university-admissions',
  'scholarship-guidance': 'scholarship-guidance',
  'ielts-test-prep': 'ielts-test-prep',
  'career-counseling': 'career-counseling',
  'india-admission': 'india-admission',
  'pre-departure': 'pre-departure',
  'home': 'home',
  '': 'home'
};

export const isCoursePage = (hash: string): boolean => {
  return hash.startsWith('course-') || hash.startsWith('program-');
};

export const isServiceDetailPage = (hash: string): boolean => {
  return [
    'visa-assistance',
    'university-admissions',
    'scholarship-guidance',
    'ielts-test-prep',
    'online-admission',
    'campus-admission',
    'career-counseling',
    'india-admission',
    'pre-departure'
  ].includes(hash);
};

export const isUniversityDetailPage = (hash: string): boolean => {
  return hash.startsWith('university-');
};

export const getUniversityIdFromHash = (hash: string): string => {
  return hash.replace('university-', '');
};

export const getPageFromHash = (hash: string): string => {
  if (!hash) return 'home';
  if (isCoursePage(hash)) return hash;
  if (isServiceDetailPage(hash)) return hash;
  if (isUniversityDetailPage(hash)) return hash;
  return PAGE_ROUTES[hash] || 'home';
};
