/* get domain */
import config from "./config";

export default debug => {
  const hostname = window.location.hostname || window.location.host;
  if (!hostname) return null;
  const { sites } = config;

  if (debug !== false) {
      console.log('debug');
      return sites[debug];
  }

  for (let i = 0; i < sites.length; i += 1) {
    for (let x = 0; x < sites[i].urls; x += 1) {
      if (hostname.includes(sites[i].urls[x])) return sites[i];
    }
  }
  return null;
};
