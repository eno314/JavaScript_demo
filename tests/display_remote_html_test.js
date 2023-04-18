import {
  DOMParser,
} from "https://deno.land/x/deno_dom@v0.1.38/deno-dom-wasm.ts";

import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { displayRemoteHTML } from "../src/display_remote_html.js";

Deno.test("Given URL returning HTML, When call displayRemoteHTML, Then target innerHTML is updated.", async () => {
  const html = `<!DOCTYPE html><div id="target"></div>`;
  const document = new DOMParser().parseFromString(html, "text/html");
  const targetElement = document.getElementById("target");

  const remoteHTML = `<h2>Hello, remote HTML</h2>`;

  await displayRemoteHTML(
    targetElement,
    "https://example.com",
    // deno-lint-ignore require-await
    async () => remoteHTML,
  );
  assertEquals(targetElement.innerHTML, remoteHTML);
});
