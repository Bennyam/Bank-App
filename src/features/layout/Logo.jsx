import { Link } from "react-router-dom";

function Logo() {
  const styles =
    "border- border-b-2 border-green-400 text-[2.12rem] font-semibold text-stone-100";

  return (
    <Link to="/" className={styles}>
      <span className="text-4xl text-green-400">KBA</span> Homebank
    </Link>
  );
}

export default Logo;
