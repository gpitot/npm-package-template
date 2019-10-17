import backBtnSVG from "../../assets/back.svg";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";


const URL = window.location.href;
const TITLE = document.title;
const DOMAIN = document.querySelector('meta[property="og:site_name"]') ? document.querySelector('meta[property="og:site_name"]').getAttribute('content') : 'NINE';

export default {
  sites: [
    {
      domain: "https://www.traveller.com.au/",
      urls: ['traveller'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2019/03/traveller-logo-black.svg"
    },
    {
      domain: "https://www.afr.com",
      urls: ['afr'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/03/AFR-logo.svg"
    },
    {
      domain: "https://www.canberratimes.com.au",
      urls: ['canberratimes'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/canberra-times-logo-1.svg"
    },
    {
      domain: "https://www.essentialbaby.com.au/",
      urls: ['essentialbaby'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/essentialbaby.svg"
    },
    {
      domain: "https://www.essentialkids.com.au/",
      urls: ['essentialkids'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/essentialkids-logo.svg"
    },
    {
      domain: "http://www.executivestyle.com.au/",
      urls: ['executivestyle'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/executivestyle-logo.svg"
    },
    {
      domain: "https://www.goodfood.com.au/",
      urls: ['goodfood'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/goodfood-logo-1.svg"
    },
    {
      domain: "https://www.smh.com.au",
      urls: ['smh'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/smh-logo.svg"
    },
    {
      domain: "https://www.theage.com.au",
      urls: ['theage'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/the-age-logo-1-1.svg"
    },
    {
      domain: "https://www.watoday.com.au",
      urls: ['watoday'],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/wa-today-logo-1-1.svg"
    }
  ],

  assets: {
    back: {
      svg: backBtnSVG
    },
    facebook: {
      svg: facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${URL}&TITLE=${TITLE}`
    },
    twitter: {
      svg: twitter,
      url: `https://twitter.com/share?url=${URL}&text=${TITLE}&via=${DOMAIN}`
    },
    email: {
      svg: email,
      url: `mailto:?subject=${TITLE}&body=Have%20a%20read%20.%0A%0D${URL}`
    },
    linkedin: {
      svg: linkedin,
      url: `https://www.linkedin.com/shareArticle?url=${URL}&title=${TITLE}&mini=true&source=${DOMAIN}`
    }
  }
};
