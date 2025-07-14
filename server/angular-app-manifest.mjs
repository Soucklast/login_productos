
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://soucklast.github.io/login_productos/',
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
    'index.csr.html': {size: 23509, hash: '26b66d32ac97dd2f474e0e9bf4688b6399c6b4e51a414919f554fe583587b027', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17128, hash: '7b3a37265352175ad12c9752998f17933e6ba84fdb633e9662cbd4165511c3d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 104878, hash: '9e40bfd1bda48dc17c6cd8e9870bab36dfe8da1da38976ee14d60d2d1add797f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
