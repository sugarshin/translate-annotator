import 'babelify/polyfill';
import 'whatwg-fetch';
import qs from 'qs';

import request from './request';

const TRANSLATOR_PATH = 'https://api.microsofttranslator.com/V2/Ajax.svc/TranslateArray';

(async () => {
  try {
    const TOKEN = await fetch('/token').then(res => res.json());
    console.log(TOKEN);
    // debugger;
    const res = await request(TRANSLATOR_PATH, { timeout: 5000 }, {
      appId: `Bearer ${TOKEN.access_token}`,
      texts: JSON.stringify(['test', 'modify', 'fetch']),
      to: 'ja'
    }, { oncomplete: null });
    console.log(res);
  } catch (err) {
    console.log(err);
    alert('リクエストはタイムアウトしました');
  }
})();
