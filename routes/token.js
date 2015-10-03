import express from 'express';

import { promisifyRequest } from '../utils/promisifyRequest';

const { CLIENT_ID, CLIENT_SECRET } = process.env;

const router = express.Router();
const requestTokenURL = 'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13';
const requestTokenParams = {
  client_id: encodeURI(CLIENT_ID),
  client_secret: encodeURI(CLIENT_SECRET),
  scope: encodeURI('http://api.microsofttranslator.com'),
  grant_type: encodeURI('client_credentials')
};

/* GET Token */
router.get('/', (req, res, next) => {
  (async () => {
    try {
      const response = await promisifyRequest({
        uri: requestTokenURL,
        method: 'POST',
        form: requestTokenParams,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      res.send(response.body);
    } catch (err) {
      console.log('Get TOKEN ERROR!!:\n', err);
    }
  })();
});

export default router
