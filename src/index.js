/*
find header and footer elements and insert correct header and footer into them
*/
import sassCompiler from "node-sass";

import getSite from "./get-site";
import setupHeader from "./setup-header";
import setupFooter from "./setup-footer";


sassCompiler.render({
    file : "./sass/index.scss"
}, (err, result) => {
    console.log(err);
    console.log(result);
});

export default ({
    config
}) => {

    const site = getSite();
    if (site === null) return;
    const {assets} = site;
    setupHeader(config, assets);
    setupFooter(config, assets);
}

