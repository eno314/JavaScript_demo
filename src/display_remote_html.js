import { fetchHTML } from "./fetch_html.js";

export function displayRemoteHTML(
  targetElement,
  url,
  fetchHTMLFunc = fetchHTML,
) {
  fetchHTMLFunc(url)
    .then((html) => {
      targetElement.innerHTML = html;
    })
    .catch((error) => {
      targetElement.innerHTML = error.message;
    });
}
