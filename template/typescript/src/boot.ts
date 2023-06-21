import { Boot } from '@ape-framework/server/boot';
import welcomeBundle from './bundle/welcome';

const boot: Boot = {
  bundles: async () => [welcomeBundle],
};

export default boot;
