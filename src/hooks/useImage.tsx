import useImage from 'use-image';

const useImageNew = (...params: Parameters<typeof useImage>) => {
  const [url, ...rest] = params;
  let newUrl: string;

  if (url.startsWith('http')) newUrl = url;
  else newUrl = `${import.meta.env.BASE_URL}${url}`;
  if (newUrl.startsWith('//')) newUrl = newUrl.substring(1);

  return useImage(newUrl, ...rest);
};
export default useImageNew;
