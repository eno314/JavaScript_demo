import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { createMockOfFetch } from "./mocks.js";
import { displayRemoteHTML } from "../src/display_remote_html.js";

function createMockElement() {
  return {
    innerHTML: "hello, world",
  };
}

Deno.test(
  "Given fetchHTML returning HTML, When call displayRemoteHTML, Then target innerHTML is updated.",
  async () => {
    const targetElement = createMockElement();
    const remoteHTML = `<h2>Hello, remote HTML</h2>`;
    // deno-lint-ignore no-window-prefix
    window.fetch = createMockOfFetch({ text: remoteHTML });

    await displayRemoteHTML(targetElement, "https://example.com");
    assertEquals(targetElement.innerHTML, remoteHTML);
  },
);

Deno.test(
  "Given fetchHTML throw Error, When call displayRemoteHTML, Then target innerHTML has error message.",
  async () => {
    const targetElement = createMockElement();
    const networkError = new Error("Network error!");
    // deno-lint-ignore no-window-prefix
    window.fetch = createMockOfFetch({ error: networkError });

    await displayRemoteHTML(targetElement, "https://example.com");
    assertEquals(targetElement.innerHTML, networkError.message);
  },
);
