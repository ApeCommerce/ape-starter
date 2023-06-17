import { Bundle } from '@ape-framework/server/boot/bundle';
import { sendReply } from '@ape-framework/server/api/handler';

const bundle: Bundle = {
  bundleId: 'welcome',
  name: 'The welcome bundle',
  routes: [
    {
      endpoint: {
        method: 'GET',
        path: '/hello',
      },
      handler: async (request, reply) => sendReply(reply, 'Hello Ape!'),
    },
  ],
};

export default bundle;
