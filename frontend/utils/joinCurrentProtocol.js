/**
 * joinCurrentProtocol
 *
 * @param {String} url
 * @returns {String}
 */
export default function joinCurrentProtocol(url) {
  return `${location.protocol}${url}`;
}
