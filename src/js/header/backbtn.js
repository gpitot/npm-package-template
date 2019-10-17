export default (site, backSVG, frontColor) => {
  const backBtn = document.createElement("div");
  backBtn.classList.add("back-btn", "header-item");
  const backBtnLink = document.createElement("a");
  backBtnLink.href = site.domain;
  backBtnLink.innerHTML = backSVG;
  backBtnLink.querySelector("path").style.fill = frontColor;
  backBtn.appendChild(backBtnLink);

  const copy = document.createElement("div");
  copy.classList.add("copy");
  copy.style.color = frontColor;
  copy.innerText = "BACK TO MAIN SITE";
  backBtn.appendChild(copy);
  return backBtn;
};
