import { boot } from 'quasar/wrappers';
import Strapi from 'strapi-sdk-js';

const strapi = new Strapi({
  url: process.env.NODE_ENV === 'production' ? process.env.STRAPI_URL : 'http://localhost:1337',
  store: {
    key: 'strapi_jwt',
    useLocalStorage: true,
  },
});

export default boot(({ app }) => {
  app.config.globalProperties.$strapi = strapi;
});

export { strapi };
