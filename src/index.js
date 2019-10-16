/*
find header and footer elements and insert correct header and footer into them
*/


import getSite from "./get-site";
import setupHeader from "./setup-header";
import setupFooter from "./setup-footer";

import './sass/index.scss';


export default ({
    headerConfig,
    footerConfig,
    debug = false
}) => {

    const site = getSite(debug);
    if (site === null) return;
    setupHeader(headerConfig, site);
    setupFooter(footerConfig, site);
}

