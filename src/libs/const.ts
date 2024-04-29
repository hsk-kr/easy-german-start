export const fullHeightInsideTemplate = [
  'calc(100svh - 160px)',
  'calc(100svh - 112px)',
];

/**
 * Prefix BASE_URL in front of the url
 * @param url
 * @returns returns BASE_URL + url
 */
export const getImgUrlWithBaseUrl = (url: string) => {
  let newUrl = `${import.meta.env.BASE_URL}${url}`;
  newUrl = newUrl.startsWith('//') ? newUrl.substring(1) : newUrl;
  return newUrl;
};
