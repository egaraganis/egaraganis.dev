import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume();

site.copy("assets");
site.loadAssets([".css"]);
site.use(jsx());

export default site;
