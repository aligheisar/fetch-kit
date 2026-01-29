type RequestMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

interface FetchOptions extends RequestInit {
  headers?: HeadersInit & { Cookie?: string };
  // biome-ignore lint/suspicious/noExplicitAny: for unknown body
  body?: any;
  method?: RequestMethod;
}

type UrlType = RequestInfo | URL;

export type { FetchOptions, UrlType };
