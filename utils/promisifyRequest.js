import request from 'request';

export const promisifyRequest = config => {
  return new Promise((resolve, reject) => {
    request(config, (error, response, body) => {
      if (error) reject(error);
      resolve(response);
    })
  });
};
