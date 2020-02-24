import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-3f520cf8.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["pwc-state-view",[[1,"pwc-state-view",{"source":[8],"title":[1],"subtitle":[1]}]]]], options);
});
