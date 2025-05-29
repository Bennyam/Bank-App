import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function AccountSucces() {
  const { id } = useParams();
  const { accounts } = useSelector((state) => state.accounts);
  const userame = accounts.find((acc) => acc.id === id).name;
  const isAuthenticated = sessionStorage.getItem("newAcc") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/account/new" replace />;
  }

  return (
    <div className="mx-auto my-20 flex w-[30rem] flex-col rounded-[7px] bg-neutral-500 px-7 py-5 text-stone-100 shadow-lg shadow-stone-700">
      <h1 className="mb-3 text-xl font-semibold">Welkom, {userame}</h1>
      <p className="mb-10">
        Je account werd succesvol aangemaakt. Als welkomstgeschenk krijg je
        €1000 om met homebank te starten.
      </p>
      <div>
        <LinkButton type="btn" to="/login">
          Start met Homebank
        </LinkButton>
      </div>
    </div>
  );
}

export default AccountSucces;
