
import { ROUTES } from "../../shared/model/routes";
import { Link } from "react-router-dom";
import { AuthLayout } from "./auth-layout";

function LoginPage() {
  return(
    <AuthLayout
      form={<form></form>}
      title="Log in"
      description ="Enter your email and password"
      footerText = {
        <><Link to={ROUTES.LOGIN}>Log in</Link></>
      }/>
);
}

export const Component = LoginPage;
