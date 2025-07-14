
export default {
  basePath: 'https://github.com/Soucklast/login_productos',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
