import Logo from "../layout/Logo";
import LinkButton from "../../ui/LinkButton";

function BankHeader({ currentAccount }) {
  return (
    <header className="flex items-center justify-between px-4 py-4 pb-3">
      <Logo />
      <p className="space-x-3 text-4xl text-stone-100">
        <span>Welkom,</span>
        <span>{currentAccount.name.split(" ")[0]}</span>
      </p>
      <LinkButton type="btn" to="/">
        Logout
      </LinkButton>
    </header>
  );
}

export default BankHeader;
