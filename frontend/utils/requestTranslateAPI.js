import requestJSONP from './requestJSONP';

const jsonpBaseOpts = {
  timeout: 5000
};
const jsonpCallback = { oncomplete: null };

/**
 * requestTranslateAPI
 *
 * @param {String} url  リクエストURL
 * @param {Object} queryParam  クエリパラメータ
 * @returns {Promise}
 */
export default function requestTranslateAPI(url, queryParam) {
  return requestJSONP(url, jsonpBaseOpts, queryParam, jsonpCallback);
}
