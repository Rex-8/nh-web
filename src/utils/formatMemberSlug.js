// src/utils/formatMemberSlug.js

/**
 * Formats a member slug for display by removing the 'm_X-' prefix,
 * replacing hyphens with spaces, and capitalizing the first letter of each word.
 * @param {string} slug The member slug (e.g., 'm_0-dr-elara-vance')
 * @returns {string} The formatted display string (e.g., 'Dr Elara Vance')
 */
export function formatMemberSlugForDisplay(slug) {
  if (!slug || typeof slug !== 'string') {
    return ''; // Handle cases where slug might be null, undefined, or not a string
  }

  // Check if the slug starts with 'm_X-' where X is a digit.
  // This makes it robust even if the prefix format changes slightly (e.g., m_10-)
  const prefixMatch = slug.match(/^m_\d+-/);

  let namePart = slug;
  if (prefixMatch) {
    // Remove the 'm_X-' prefix. The `prefixMatch[0]` gives the matched prefix string.
    namePart = slug.substring(prefixMatch[0].length); // 'dr-elara-vance'
  }

  // Replace all hyphens with spaces
  const withSpaces = namePart.replace(/-/g, ' '); // 'dr elara vance'

  // Capitalize the first letter of each word
  // \b matches a word boundary, \w matches any word character (letter, number, underscore)
  const capitalized = withSpaces.replace(/\b\w/g, char => char.toUpperCase()); // 'Dr Elara Vance'

  return capitalized;
}