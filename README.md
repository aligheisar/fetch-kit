# @aligheisar/fetch-kit

A small, focused fetch wrapper with optional runtime validation.

`fetch-kit` provides a thin, predictable layer on top of the native Fetch API. It gives you a small set of focused fetch helpers with different levels of safety, depending on what you need.

No abstractions you didn’t ask for. Just safer data handling.

## Installation

```bash
npm install @aligheisar/fetch-kit
```

or

```bash
pnpm add @aligheisar/fetch-kit
```

or

```bash
yarn add @aligheisar/fetch-kit
```

## cFetch

```ts
import { cFetch } from "@aligheisar/fetch-kit";
```

### API

```ts
function cFetch<T = unknown>(
  url: UrlType,
  options?: FetchOptions
): Promise<T>;
```

### Example

```ts
type User = {
  id: string;
  name: string;
};

const user = await cFetch<User>("/api/user");
```

`cFetch` assumes the response body already matches your expectations. No runtime validation is performed.

## vFetch (validated fetch)

```ts
import { vFetch } from "@aligheisar/fetch-kit/v-fetch";
```

`vFetch` parses and validates the response using a Valibot schema. If validation fails, an error is thrown.

**Note**
To use `vFetch`, you must install `valibot` as a dependency:

```bash
npm install valibot
```

### API

```ts
function vFetch<
  Schema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>
>(
  url: UrlType,
  schema: Schema,
  options?: FetchOptions
): Promise<InferOutput<Schema>>;
```

### Example

```ts
import { object, string } from "valibot";
import { vFetch } from "@aligheisar/fetch-kit/v-fetch";

const UserSchema = object({
  id: string(),
  name: string(),
});

const user = await vFetch("/api/user", UserSchema);
```

If the API returns invalid data, `vFetch` fails fast instead of letting bad data flow through your app.
