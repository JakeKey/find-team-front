export const getQueryStringFromObject = (obj?: Record<string, string | number>): string => {
  const objKeys = obj && Object.keys(obj);
  if (!obj || !objKeys?.length) return '';
  return objKeys.reduce(
    (acc, cVal, index) => acc + `${cVal}=${obj[cVal]}${index === objKeys.length - 1 ? '' : '&'}`,
    '?'
  );
};
