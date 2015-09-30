import 'babelify/polyfill';
import qs from 'qs';

import request from './request';

const { TRANSLATE_ANNOTATOR_client_id, TRANSLATE_ANNOTATOR_client_secret } = process.env;
const requestTokenURL = 'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13';
const requestTokenParams = qs.stringify({
  client_id: client_id,
  client_secret: encodeURIComponent(client_secret),
  scope: encodeURIComponent('http://api.microsofttranslator.com'),
  grant_type: 'client_credentials'
});

(async () => {
  try {
    const TOKEN = await fetch(`${requestTokenURL}?${requestTokenParams}`, { method: 'post' });
    const res = await request('http://api.microsofttranslator.com/V2/Ajax.svc/TranslateArray', {
      appId: `Bearer ${TOKEN.access_token}`,
      texts: JSON.stringify(['test', 'modify', 'fetch']),
      to: 'ja'
    });
    console.log(res);
  } catch (err) {
    console.log(err);
    alert('リクエストはタイムアウトしました');
  }
})();
