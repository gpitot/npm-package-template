import getLogo, {styleSvg} from "../site/get-logo";

export default (
  { backColor = "black", logoColor = null, css = {} },
  site
) => {
  const footer = document.querySelector("footer");
  if (!footer) return;

  for (let [key, value] of Object.entries(css)) {
    footer.style[key] = value;
  }

  footer.style.background = backColor;
  const a = document.createElement("a");
  a.href = site.domain;

  //fetch logo
  getLogo(site.logo)
    .then(data => {
        a.innerHTML = data;
        styleSvg(a, logoColor);
        footer.appendChild(a);
    })
    .catch(err => console.warn(err));

};
