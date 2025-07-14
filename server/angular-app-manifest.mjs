
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/proyecto_login_api',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/proyecto_login_api/login",
    "route": "/proyecto_login_api"
  },
  {
    "renderMode": 2,
    "route": "/proyecto_login_api/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23484, hash: 'ed2b3ea61bf63fe443000289e7fd454b18e860eb2f11f37960a5db3e2c6ccec4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17103, hash: 'f2a5a4c17af32a983df16db885149d3f47f2f7ab5284a2e01823bda55e104610', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 104853, hash: '5cdc3c23ed59e56935a44c432085e18578172c02aca7f45c86092be806f9f6cc', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
