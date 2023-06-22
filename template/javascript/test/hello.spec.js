require('./config');
const fetch = require('node-fetch');
const api = require('@ape-framework/server/api');

beforeAll(async () => {
  await api.start();
});

afterAll(async () => {
  await api.close();
});

describe('Requesting the /hello endpoint', () => {
  test('Returns expected response', async () => {
    const response = await fetch(`${api.getUrl()}/hello`);
    expect(response.status).toBe(200);
    expect(await response.text()).toBe('Hello Ape!');
  });
});
