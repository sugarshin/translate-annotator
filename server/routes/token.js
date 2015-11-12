import { Router } from 'express';
import requestPromise from 'request-promise';

const { CLIENT_ID, CLIENT_SECRET } = process.env;

const router = Router();
const requestTokenURL = 'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13';
const requestTokenFormData = {
  /* eslint-disable camelcase */
  client_id: encodeURI(CLIENT_ID),
  client_secret: encodeURI(CLIENT_SECRET),
  scope: encodeURI('http://api.microsofttranslator.com'),
  grant_type: encodeURI('client_credentials')

  /* eslint-enable camelcase */
};

/* GET Token */
router.get('/', async (req, res) => {
  try {
    const token = await requestPromise({
      uri: requestTokenURL,
      method: 'POST',
      json: true,
      form: requestTokenFormData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    res.send(token);
  } catch (err) {
    console.log('Get TOKEN ERROR!!:\n', err);
  }
});

export default router;
