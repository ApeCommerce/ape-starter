import { Bundle } from '@ape-framework/server/boot/bundle';
import { send } from '@ape-framework/server/api/handler';

const bundle: Bundle = {
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

export default bundle;
