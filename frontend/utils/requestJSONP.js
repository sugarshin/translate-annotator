import jsonp from 'jsonp';
import qs from 'qs';
import assign from 'lodash/object/assign';

const qsStringifyOpts = {
  arrayFormat: 'repeat',
  strictNullHandling: true
};

/**
 * requestJSONP
 *
 * @param {String} url  リクエストURL
 * @param {Object} config  jsonp config
 *   timeout: 60000
 *   prefix: '__jp'
 *   name: prefix + incremented counter
 * @param {Object} queryParams  クエリパラメータ
 * @returns {Promise}
 */
export default function requestJSONP(url, config, ...queryParams) {
  return new Promise((resolve, reject) => {
    const opts = assign({}, config, {
      param: qs.stringify(assign({}, ...queryParams), qsStringifyOpts)
    });

    jsonp(url, opts, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}
