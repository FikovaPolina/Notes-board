import "react-router";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  BOARDS: "/boards",
  BOARD: "/boards/:boardId",
} as const;

export type Pages = {
  [ROUTES.BOARD]: {
    params: {
      boardId: string;
    };
  };
  // other routes with params
};

declare module "react-router" {
  interface Register {
    pages: Pages;
  }
}
