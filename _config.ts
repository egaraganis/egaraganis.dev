import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume();

site.copy("_data");
site.copy("scripts");
site.copy("assets");
site.loadAssets([".css"]);
site.use(jsx());
site.use(favicon());

export default site;
