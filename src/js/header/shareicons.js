
const shareIcon = ({ svg = "", url = "#" }, frontColor) => {
    const item = document.createElement("li");
    item.classList.add("icon");
    const a = document.createElement("a");
    a.classList.add("ga-target");
  
    a.href = url;
    a.target = "_blank";
    a.innerHTML = svg;
    Array.from(a.querySelectorAll("path, rect")).forEach(
      p => (p.style.fill = frontColor)
    );
  
    item.appendChild(a);
    return item;
  };


export default (assets, frontColor) => {
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
  return shareItems;
};
