const { send } = require('@ape-framework/server/api/handler');

const bundle = {
  bundleId: 'welcome',
  name: 'Welcome',
  routes: [
    {
      endpoint: {
        method: 'GET',
        path: '/hello',
      },
      handler: async (request, reply) => send(reply, 'Hello Ape!'),
    },
  ],
};

module.exports = bundle;
