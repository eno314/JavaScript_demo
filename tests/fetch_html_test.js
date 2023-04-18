import { fetchHTML } from "../src/fetch_html.js";
import { createMockOfFetch } from "./mocks.js";
import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";

Deno.test("fetchHTML: successful request (mocked)", async () => {
  const mockResponse = `
<!DOCTYPE html>
<html>
<head>
  <title>Sample HTML</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>
`;
  // deno-lint-ignore no-window-prefix
  window.fetch = createMockOfFetch({ text: mockResponse });

  const html = await fetchHTML("https://example.com");

  assertEquals(html, mockResponse);
});

Deno.test("fetchHTML: failed request (mocked, status)", async () => {
  // deno-lint-ignore no-window-prefix
  window.fetch = createMockOfFetch({ test: {} }, 404);

  try {
    await fetchHTML("https://example.com/invalid-endpoint");
  } catch (error) {
    assertEquals(error, new Error(`HTTP error! status: 404`));
  }
});
