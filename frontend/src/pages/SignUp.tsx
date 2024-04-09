import { Quote } from "../components/Quote";
import { SignUpForm } from "../components/SignUp/SignUpForm";

export const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <SignUpForm />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
