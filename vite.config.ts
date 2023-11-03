import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import unocss from "unocss/vite";
import { importDevServerPlugin } from "@hiogawa/vite-import-dev-server";

export default defineConfig({
  plugins: [remix(), unocss(), tsconfigPaths(), importDevServerPlugin()],
});
