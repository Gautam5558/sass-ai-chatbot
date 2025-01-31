import { Button } from "../ui/button";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <Button>Login</Button>
      <Button variant="secondary">Signup</Button>
    </div>
  );
};

export default AuthButtons;
