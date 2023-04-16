export function getQueryParams(url) {
  const queryString = url.search.slice(1);
  const queryParams = {};

  if (queryString) {
    queryString.split("&").forEach((param) => {
      const [key, value] = param.split("=");
      queryParams[decodeURIComponent(key)] = decodeURIComponent(value || "");
    });
  }

  return queryParams;
}
