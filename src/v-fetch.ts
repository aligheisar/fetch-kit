import { type BaseIssue, type BaseSchema, parse } from "valibot";

import { fetchCore } from "./fetch-core";
import type { FetchOptions, UrlType } from "./types";

export async function vFetch<
  Schema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
>(url: UrlType, schema: Schema, options: FetchOptions = {}) {
  const body = await fetchCore(url, options);

  return parse(schema, body);
}
