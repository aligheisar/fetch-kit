import { HttpError } from "@aligheisar/http-utils";

import type { FetchOptions, UrlType } from "./types";
import { createMergedOptions } from "./utils";

const fetchCore = async (url: UrlType, options: FetchOptions) => {
  const mergedOptions = createMergedOptions(options);

  const res = await fetch(url, mergedOptions);
  const contentType = res.headers.get("content-type");
  let body: unknown;

  if (contentType?.includes("application/json")) {
    body = await res.json();
  } else {
    body = await res.text();
  }

  if (!res.ok) {
    throw new HttpError(res, body);
  }

  return body;
};

export { fetchCore };
