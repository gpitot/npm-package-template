export const styleSvg = (parent, logoColor) => {
  if (!logoColor) return;
  Array.from(parent.querySelectorAll("path")).forEach(
    p => (p.style.fill = logoColor)
  );
};

export default url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(data => data.text())
      .then(text => resolve(text))
      .catch(err => reject(err));
  });
};
