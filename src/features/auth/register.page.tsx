import { AuthLayout } from "./auth-layout";
import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/model/routes";


function RegisterPage() {

    return(
      <AuthLayout
        form={<form></form>}
        title="Register"
        description ="Enter your email and password"
        footerText = {
          <><Link to={ROUTES.REGISTER}>Register</Link></>
        }/>
  );
}

export const Component = RegisterPage;
