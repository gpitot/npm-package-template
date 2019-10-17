import getLogo, {styleSvg} from "../site/get-logo";


export default (site, logoColor) => {
  const logo = document.createElement("div");
  logo.classList.add("header-item");
  const logoLink = document.createElement("a");
  logoLink.href = site.domain;

  //fetch logo
  getLogo(site.logo)
    .then(data => {
      logoLink.innerHTML = data;
      styleSvg(logoLink, logoColor);
      logo.appendChild(logoLink);
    })
    .catch(err => console.warn(err));

  return logo;
};
