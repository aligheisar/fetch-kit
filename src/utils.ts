import { defaultHeaders } from "./defaults";
import type { FetchOptions } from "./types";

const createMergedOptions = (options: FetchOptions): FetchOptions => {
  return {
    ...options,
    body:
      options.body && typeof options.body === "object"
        ? JSON.stringify(options.body)
        : options.body,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
};

export { createMergedOptions };
