import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "../api/schema/generated"; 
import { CONFIG } from "../model/config";

export const fetchClient = createFetchClient<paths>({
  baseUrl: CONFIG.API_BASE_URL,
});

export const rqClient = createClient(fetchClient);