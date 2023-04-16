export function createMockOfFetch({
  json = {},
  text = "",
  status = 200,
  error = null,
}) {
  return () => {
    if (error) {
      return Promise.reject(error);
    }
    return Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(json),
      text: () => Promise.resolve(text),
    });
  };
}
