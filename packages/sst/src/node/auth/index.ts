export * from "./auth.js";
export * from "./session.js";

export * from "./adapter/adapter.js";
export * from "./adapter/facebook.js";
export * from "./adapter/google.js";
export * from "./adapter/twitch.js";
export * from "./adapter/github.js";
export * from "./adapter/oidc.js";
export * from "./adapter/oauth.js";
export * from "./adapter/link.js";
export * from "./adapter/openauth.js";

import { createProxy } from "../util/index.js";

export interface AuthResources {}

export const Auth = createProxy<AuthResources>("Auth");
