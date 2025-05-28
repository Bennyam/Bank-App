import { Link } from "react-router-dom";

function LinkButton({ to, children, type }) {
  const styles = {
    btn: "rounded-md bg-green-400 px-5 py-2 text-base uppercase hover:bg-green-500 transition-colors duration-200",
    link: "text-base text-stone-100 uppercase transition-all duration-200 hover:text-green-400",
  };

  if (!to) return <button className={styles[type]}>{children}</button>;

  return (
    <Link to={to} className={styles[type]}>
      {children}
    </Link>
  );
}

export default LinkButton;
