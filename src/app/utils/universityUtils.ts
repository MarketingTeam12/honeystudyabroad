// Utility functions for university data manipulation

export const generateUniversitySlug = (universityName: string): string => {
  return universityName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start and end
};

export const getUniversityDetailUrl = (universityName: string): string => {
  const slug = generateUniversitySlug(universityName);
  return `/#university-${slug}`;
};
