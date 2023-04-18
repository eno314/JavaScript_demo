import { fetchHTML } from "./fetch_html.js";

export async function displayRemoteHTML(targetElement, url) {
  try {
    const html = await fetchHTML(url);
    targetElement.innerHTML = html;
  } catch (error) {
    targetElement.innerHTML = error.message;
  }
}
