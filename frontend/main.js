import 'babel/polyfill';
import 'whatwg-fetch';

import request from './request';

const TRANSLATOR_PATH = '//api.microsofttranslator.com/V2/Ajax.svc/TranslateArray';

const joinCurrentProtocol = url => {
  return `${location.protocol}${url}`;
};

(async () => {
  try {
    const TOKEN = await fetch('/token').then(res => res.json());
    console.log(TOKEN);
    // debugger;
    const res = await request(joinCurrentProtocol(TRANSLATOR_PATH), {
      timeout: 5000
    }, {
      appId: `Bearer ${TOKEN.access_token}`,
      texts: JSON.stringify(['test', 'modify', 'fetch']),
      to: 'ja'
    }, { oncomplete: null });

    console.log(res);
    res.forEach(object => {
      const p = document.createElement('p');
      p.textContent = object.TranslatedText;
      document.body.appendChild(p);
    });
  } catch (err) {
    console.log(err);
    alert('リクエストはタイムアウトしました');
  }
})();
