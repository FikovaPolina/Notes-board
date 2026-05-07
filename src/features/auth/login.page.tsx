import { ROUTES } from "../../shared/model/routes";
import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/auth-layout";
import { LoginForm } from "./ui/login-form";

function LoginPage() {
  return (
    <AuthLayout
    form={<LoginForm />}
      title="Log in"
      description="Enter your email and password"
      footerText={
        <>
          <Link to={ROUTES.LOGIN}>Log in</Link>
        </>
      }
    />
  );
}

export const Component = LoginPage;
