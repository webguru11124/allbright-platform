"use strict";

export const pause = (time: number, message?: string): Promise<void> => {
  return new Promise((resolve) => {
    if (message) console.log(message);
    setTimeout(resolve, time);
  });
};

export const clean = <T>(obj: T): Partial<T> => {
  const store: Partial<T> = { ...obj };

  for (const propName in store) {
    if (store[propName] === null || store[propName] === undefined) {
      delete store[propName];
    }
  }

  return store;
};

export const exec = (regex: RegExp, text: string): { match: string; int: number; end: number }[] => {
  const store: { match: string; int: number; end: number }[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text))) {
    const start = match.index;
    const end = start + match[0].length;
    store.push({ match: match[0], int: start, end });
  }

  return store;
};

export const trimStr = (str: string, maxLength: number): string | undefined => {
  if (!str) return undefined;
  return str.length >= maxLength ? str.substring(0, maxLength) + "..." : str;
};

export const uuid = (): string => {
  const s4 = (): string =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export function parseJwt(token: string) {
  if (!token) return null;
  var base64Url = token.split(".")[1];
  if (!base64Url) return null;
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

export function base64ToFile(base64Data: string, fileName: string): File {
  const [metadata, base64String] = base64Data.split(",");
  const mimeType = metadata.match(/data:(.*?);base64/)?.[1] || "application/octet-stream";

  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray], { type: mimeType });
  return new File([blob], fileName, { type: mimeType });
}

export const filterToArray = (obj: any, callback: (key: string, value: any, index: number) => boolean) => {
  return Object.keys(obj)
    .filter((key, idx) => {
      return callback(key, obj[key], idx);
    })
    .map((key) => ({ key, ...obj[key] }));
};
