import { initConfig } from '@ape-framework/server/config';

initConfig({
  apiRandomPort: true,
  jwtIssuer: 'issuer',
  jwtSecret: 'secret',
  logLevel: 'silent',
});
