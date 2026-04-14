import { createOpenApiHttp } from "openapi-msw";
import type { paths } from "../schema/generated";
import { CONFIG } from "../../model/config";

export const http = createOpenApiHttp<paths>({
  baseUrl: CONFIG.API_BASE_URL,
});