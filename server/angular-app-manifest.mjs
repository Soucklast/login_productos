
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/login_productos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login_productos/login",
    "route": "/login_productos"
  },
  {
    "renderMode": 2,
    "route": "/login_productos/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23482, hash: '7d125f90791ba0fd4c0dba7ec009bd3dd2ffc23d4674535a9d120960b13d8a94', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17101, hash: 'b6e67db709046f81091d2e15a9f0b3e9c96dbaa6ada7fcd8ecee403cea7463b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 104851, hash: 'ac63e07e58364afbca26209d5c4a3efcc0cd296f5e158e40ac849b60575fb784', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
