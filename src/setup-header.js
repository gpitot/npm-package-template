import config from "./config";
import getLogo, {styleSvg} from "./get-logo";

const shareIcon = ({ svg = "", url = "#" }, frontColor) => {
  const item = document.createElement("li");
  item.classList.add("icon");
  const a = document.createElement("a");
  a.classList.add("ga-target");

  a.href = url;
  a.innerHTML = svg;
  Array.from(a.querySelectorAll("path, rect")).forEach(
    p => (p.style.fill = frontColor)
  );

  item.appendChild(a);
  return item;
};

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
  const backBtn = document.createElement("div");
  backBtn.classList.add("back-btn", "header-item");
  const backBtnLink = document.createElement("a");
  backBtnLink.href = site.domain;
  backBtnLink.innerHTML = assets.back.svg;
  backBtnLink.querySelector("path").style.fill = frontColor;
  backBtn.appendChild(backBtnLink);

  const copy = document.createElement("div");
  copy.classList.add("copy");
  copy.style.color = frontColor;
  copy.innerText = "BACK TO MAIN SITE";
  backBtn.appendChild(copy);

  //main logo
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
  

  //share items
  const shareItems = document.createElement("div");
  shareItems.classList.add("share-icons", "header-item");
  const shareTxt = document.createElement("h4");
  const shareTxtSpan = document.createElement("span");
  shareTxtSpan.style.color = frontColor;
  shareTxtSpan.innerText = "SHARE";
  shareTxt.appendChild(shareTxtSpan);

  shareItems.appendChild(shareTxt);

  const list = document.createElement("ul");

  list.appendChild(shareIcon(assets.facebook, frontColor));
  list.appendChild(shareIcon(assets.twitter, frontColor));
  list.appendChild(shareIcon(assets.linkedin, frontColor));
  list.appendChild(shareIcon(assets.email, frontColor));

  shareItems.appendChild(list);

  header.appendChild(backBtn);
  header.appendChild(logo);
  header.appendChild(shareItems);
};
