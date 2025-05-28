import LinkButton from "../../ui/LinkButton";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg flex items-center justify-between px-4 py-4">
      <Logo />
      <ul className="flex list-none items-center gap-10">
        <LinkButton type="link">About</LinkButton>
        <LinkButton to="/login" type="link">
          Login
        </LinkButton>
        <LinkButton to="/account/new" type="btn">
          New account
        </LinkButton>
      </ul>
    </header>
  );
}

export default Header;
