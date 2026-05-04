import { setupWorker } from "msw/browser";
import { boardsHandlers } from "./handlers/boards";
import { authHandlers } from "./handlers/auth";

export const worker = setupWorker(...boardsHandlers, ...authHandlers);

worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js', 
    },
  })