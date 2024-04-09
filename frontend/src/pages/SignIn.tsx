import { Quote } from "../components/Quote";
import { SignInForm } from "../components/SignIn/SignInForm";

export const SignIn = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <SignInForm />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
