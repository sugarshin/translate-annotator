import jsonp from 'jsonp';
import qs from 'qs';
import assign from 'lodash/object/assign';

const qsStringifyOpts = {
  arrayFormat: 'repeat',
  strictNullHandling: true
};

const BASE_REQUEST_QUERY = { oncomplete: null };

/**
 * request
 *
 * @param   {String} url リクエストURL
 * @param   {Object} query クエリパラメータ
 * @returns {Promise}
 */
export default function request(url, ...query) {
  return new Promise((resolve, reject) => {
    jsonp(url, {
      param: qs.stringify(assign({}, ...query, BASE_REQUEST_QUERY), qsStringifyOpts),
      timeout: 10000
    }, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}
