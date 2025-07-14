
export default {
  basePath: 'https://soucklast.github.io/login_productos',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
