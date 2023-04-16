import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";
import { getQueryParams } from "../src/get_query_params.js";

Deno.test("Giving URL having query params, When call getQueryParams, Then returns object having params.", () => {
  const url = new URL(
    "https://example.com/?hoge_key=hoge_value&fuga_key=https%3A%2F%2Ffuga%2Fpiyo%3Ffoo%3Dbar",
  );

  const actual = getQueryParams(url);

  const expected = {
    "hoge_key": "hoge_value",
    "fuga_key": "https://fuga/piyo?foo=bar",
  };
  assertEquals(actual, expected);
});

Deno.test("Giving URL having no query params, When call getQueryParams, Then returns empty object.", () => {
  const url = new URL("https://example.com/");

  const actual = getQueryParams(url);

  const expected = {};
  assertEquals(actual, expected);
});

Deno.test("Giving URL having empty query, When call getQueryParams, Then returns empty object.", () => {
  const url = new URL("https://example.com/?");

  const actual = getQueryParams(url);

  const expected = {};
  assertEquals(actual, expected);
});

Deno.test("Giving URL having query with no value, When call getQueryParams, Then returns object having params with no value.", () => {
  const url = new URL("https://example.com/?hoge_key&fuga_key=");

  const actual = getQueryParams(url);

  const expected = {
    "hoge_key": "",
    "fuga_key": "",
  };
  assertEquals(actual, expected);
});
