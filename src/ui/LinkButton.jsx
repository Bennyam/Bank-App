import { Link } from "react-router-dom";

function LinkButton({ to, children, type }) {
  const styles = {
    btn: "rounded-md bg-green-400 px-5 py-2 text-base text-stone-800 uppercase hover:bg-green-500 transition-colors duration-200",
    link: "text-base text-stone-100 uppercase transition-all duration-200 hover:text-green-400",
    back: "rounded-md border-2 border-stone-100 px-5 py-2 text-base text-stone-100 uppercase",
  };

  if (!to) return <button className={styles[type]}>{children}</button>;

  return (
    <Link to={to} className={styles[type]}>
      {children}
    </Link>
  );
}

export default LinkButton;
