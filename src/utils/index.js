/**
 * Utilities - utility functions and tools
 *
 */

/**
 * kebabCase - transfrom string to kebab case
 *
 * @param {String} string - to transform
 */
export const kebabCase = string =>
  string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();

/**
 * validateRegex - check if string is a valid regex pattern
 *
 * @param {String} pattern - string pattern to validate
 */
export const validateRegex = pattern => {
  let parts = pattern.split('/'),
      regex = pattern,
      options = '';

  if (parts.length > 1) {
    regex = parts[1];
    options = parts[2];
  }

  try {
    new RegExp(regex, options);
    return true;
  } catch(error) {
    return false;
  }
}
