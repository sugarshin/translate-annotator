import protocolRegex from '../../universal/protocolRegex';

/**
 * joinCurrentProtocol
 *
 * @param {String} url
 * @returns {String}
 */
export default function joinCurrentProtocol(url) {
  if (protocolRegex().test(url)) return url;
  return `${location.protocol}${url}`;
}
