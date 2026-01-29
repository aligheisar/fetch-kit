import { fetchCore } from "./fetch-core";
import type { FetchOptions, UrlType } from "./types";

export async function cFetch<T = unknown>(
  url: UrlType,
  options: FetchOptions = {},
): Promise<T> {
  const body = await fetchCore(url, options);

  return body as T;
}
