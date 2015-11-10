import jsonpP from 'jsonp-p';
import qs from 'qs';
import assign from 'lodash/object/assign';

const jsonpBaseOpts = {
  timeout: 5000
};
const jsonpCallback = { oncomplete: null };
const qsStringifyOpts = {
  arrayFormat: 'repeat',
  strictNullHandling: true
};

/**
 * requestTranslateAPI
 *
 * @param {String} url  リクエストURL
 * @param {Object} queryParam  クエリパラメータ
 * @returns {Promise}
 */
export default function requestTranslateAPI(url, queryParam) {
  const opts = assign({}, jsonpBaseOpts, {
    param: qs.stringify(assign({}, queryParam, jsonpCallback), qsStringifyOpts)
  });
  return jsonpP(url, opts);
}
