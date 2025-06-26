import { createProxy } from "../util/index.js";

export interface RDSResources {}

export interface RDSv2Resources {}

export const RDS = /* @__PURE__ */ createProxy<RDSResources>("RDS");

export const RDSv2 = /* @__PURE__ */ createProxy<RDSv2Resources>("RDSv2");