import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import image from "@rollup/plugin-image";

export const config: Config = {
  namespace: "pwc-state-view",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [sass(), image()]
};
