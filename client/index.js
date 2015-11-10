import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('.root')
);

// import requestTranslateAPI from './utils/requestTranslateAPI';
// import joinCurrentProtocol from './utils/joinCurrentProtocol';
//
// const API_PATH = '//api.microsofttranslator.com/V2/Ajax.svc/TranslateArray';
//
// // const API_PATH = '//api.microsofttranslator.com/V2/Ajax.svc/Speak';
//
// (async () => {
//   try {
//     const TOKEN = await fetch('/token').then(res => res.json());
//     const text = 'test';
//     const res = await requestTranslateAPI(joinCurrentProtocol(API_PATH), {
//       appId: `Bearer ${TOKEN.access_token}`,
//
//       // text,
//       // language: 'en',
//       // format: 'audio/mp3'
//
//       texts: JSON.stringify([text]),
//       to: 'ja'
//     });
//
//     // const audio = document.createElement('audio');
//     // audio.src = res;
//     // audio.setAttribute('controls', '');
//     // document.body.appendChild(audio);
//
//     res.forEach(object => {
//       const p = document.createElement('p');
//       p.textContent = object.TranslatedText;
//       document.body.appendChild(p);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// })();
