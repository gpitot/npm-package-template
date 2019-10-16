/* get domain */
import config from "./config";

export default () => {
  const hostname = window.location.hostname || window.location.host;
  if (!hostname) return null;
  const {sites} = config;
  if (hostname.includes('localhost')) return sites[0];
  for (let i = 0; i < sites.length; i += 1) {
    for (let x = 0; x < sites[i].urls; x += 1) {
      if (hostname.includes(sites[i].urls[x])) return sites[i];
    }
  }
  return null;
};
