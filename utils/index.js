"use strict";

export const localStorage = (() => {
  if (typeof window !== "undefined") return window.localStorage;

  return {
    getItem: () => { },
    setItem: () => { },
    removeItem: () => { },
    clear: () => { },
  };
})();

export const sessionStorage = (() => {
  if (typeof window !== "undefined") return window.sessionStorage;

  return {
    getItem: () => { },
    setItem: () => { },
    removeItem: () => { },
    clear: () => { },
  };
})();

export const pause = (time, message) => {
  return new Promise((resolve) => {
    if (message) console.log(message);
    setTimeout(resolve, time);
  });
};

export const clean = (obj) => {
  const store = { ...obj };

  for (const propName in store) {
    if (store[propName] === null || store[propName] === undefined) {
      delete store[propName];
    }
  }

  return store;
};

export const exec = (regex, text) => {
  const store = [];
  let match;

  while ((match = regex.exec(text))) {
    const start = match.index;
    const end = start + match[0].length;
    store.push({ match: match[0], int: start, end });
  }

  return store;
};

export const trimStr = (str, maxLength) => {
  if (!str) return;
  return str.length >= maxLength ? str.substring(0, maxLength) + "..." : str;
};

export const uuid = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const secToNearestMin = (sec) => {
  return Math.round(sec / 60);
};

export const secToMin = (sec) => {
  const min = `${Math.floor(sec / 60)}`.padStart(2, "0");
  sec = `${sec % 60}`.padStart(2, "0");
  return `${min}:${sec}`;
};

export const secToTimeLeft = (sec, isTomorrow) => {
  if (isTomorrow) return `tomorrow`;
  if (sec > 1209600) return `in a few weeks`; // 14 days
  if (sec > 604800) return `in about a week`; // 7 days
  if (sec > 86400) return `in a few days`; // 1 day

  return `in ${getCountdown()}`;

  function getCountdown() {
    const hr = `${Math.floor(sec / 3600)}`.padStart(2, "0");
    const min = `${Math.floor((sec % 3600) / 60)}`.padStart(2, "0");
    const s = `${sec % 60}`.padStart(2, "0");

    return `${hr}:${min}:${s}`;
  }
};

export const filterToArray = (obj, callback) => {
  return Object.keys(obj)
    .filter((key, idx) => callback(key, obj[key], idx))
    .map((key) => ({ key, ...obj[key] }));
};

export const getRandomStr = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const ellipsis = (string, length = 40) => {
  return string
    ?.slice(0, length)
    .trim()
    .concat(string.length > length ? "..." : "");
};

export const ukToDate = (string) => {
  const [day, monthIndex, year] = string.split("/");
  return new Date(year, Number(monthIndex) - 1, day).getTime();
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateMetaTags = (info) => {
  const resizeImg =
    info.imgW && info.imgH
      ? `${info.imgUrl}?w=${info.imgW}&h=${info.imgH}`
      : info.imgUrl;

  const trimTitle = info.title.substring(0, 60);
  const trimDesc =
    info.description.length > 155
      ? `${info.description.substring(0, 155)}...`
      : info.description;

  return [
    { itemProp: "name", content: trimTitle },
    { itemProp: "description", content: trimDesc },
    { itemProp: "image", content: resizeImg },
    { property: "og:title", content: trimTitle },
    { property: "og:description", content: trimDesc },
    { property: "og:image", content: resizeImg },
    { property: "og:image:alt", content: info.imgAlt },
    { property: "og:image:width", content: info.imgW || 800 },
    { property: "og:image:height", content: info.imgH || 800 },
    { property: "og:url", content: info.url },
    { name: "description", content: trimDesc },
    { name: "twitter:title", content: trimTitle },
    { name: "twitter:description", content: trimDesc },
    { name: "twitter:image", content: resizeImg },
  ];
};

export const generateMetaType = (type, info = {}) => {
  const typeProps = Object.keys(info);
  const getTypeInfo = (prop) => ({
    property: `${type}:${prop}`,
    content: info[prop],
  });

  const typeInfo = typeProps.map(getTypeInfo);

  return [{ property: "og:type", content: type }, ...typeInfo];
};
