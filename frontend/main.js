import 'babel/polyfill';
import 'whatwg-fetch';
import Promise from 'bluebird';

import requestTranslateAPI from './utils/requestTranslateAPI';
import joinCurrentProtocol from './utils/joinCurrentProtocol';

global.Promise = global.Promise || Promise;

const API_PATH = '//api.microsofttranslator.com/V2/Ajax.svc/TranslateArray';
// const API_PATH = '//api.microsofttranslator.com/V2/Ajax.svc/Speak';

(async () => {
  try {
    const TOKEN = await fetch('/token').then(res => res.json());
    // debugger;
    const text = 'This Ecma Standard defines the ECMAScript 2015 Language. It is the sixth edition of the ECMAScript Language Specification.';
    const res = await requestTranslateAPI(joinCurrentProtocol(API_PATH), {
      appId: `Bearer ${TOKEN.access_token}`,
      // text,
      // language: 'en',
      // format: 'audio/mp3'

      texts: JSON.stringify(['test', 'JavaScript', 'awesome']),
      to: 'ja'
    });

    // const audio = document.createElement('audio');
    // audio.src = res;
    // audio.setAttribute('controls', '');
    // document.body.appendChild(audio);

    res.forEach(object => {
      const p = document.createElement('p');
      p.textContent = object.TranslatedText;
      document.body.appendChild(p);
    });
  } catch (err) {
    console.log(err);
  }
})();
