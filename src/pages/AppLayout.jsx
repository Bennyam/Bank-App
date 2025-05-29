import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

function AppLayout() {
  const { id } = useParams();
  const isAuthenticated = sessionStorage.getItem("auth") === "true";
  const { accounts } = useSelector((state) => state.accounts);
  const curAccount = accounts.find((acc) => acc.id === id);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <section className="h-[100dvh] bg-stone-600 text-5xl text-stone-100">
      <div>Welkom {curAccount.name}</div>
      <ul>
        {curAccount.movements.map((mov, i) => (
          <li key={i}>
            <p>
              {mov.ammount} {mov.date}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AppLayout;
