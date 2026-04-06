import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { Header } from "../features/header/Header";




export function App() {
  const location = useLocation();

  // const isAuthPage =
  //   // location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;

  return (
    <div>
      {/* {!isAuthPage && < Header />} */}
      <Outlet />
    </div>
  );
}