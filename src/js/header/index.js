import config from "../site/config";

import BackBtn from "./backbtn";
import MainLogo from "./mainlogo";
import ShareIcons from "./shareicons";


export default (
  { frontColor = "white", backColor = "black", logoColor = null, css = {} },
  site
) => {
  const header = document.querySelector("header");
  if (!header) return;

  const { assets } = config;

  header.style.background = backColor;

  for (let [key, value] of Object.entries(css)) {
    header.style[key] = value;
  }

  //back button
  header.appendChild(BackBtn(site, assets.back.svg, frontColor));

  //main logo
  header.appendChild(MainLogo(site, logoColor));
  
  //share icons 
  header.appendChild(ShareIcons(assets, frontColor));

  


};
