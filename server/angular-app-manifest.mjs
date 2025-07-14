
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Soucklast/login_productos',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Soucklast/login_productos/login",
    "route": "/Soucklast/login_productos"
  },
  {
    "renderMode": 2,
    "route": "/Soucklast/login_productos/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23509, hash: '759363f8efad84dd0f228a71144eba73e375fa72d28fd95c73fff8e126a1668c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17128, hash: '5be5efa3e2bfcc36711352b902d9c9b4f2c2e6f01058e48015eef9953de5c993', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 104878, hash: '6729ceb71fae7707b9f4049f71a49cd6cd66d0004b56a83b1bf09d5845043c06', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
