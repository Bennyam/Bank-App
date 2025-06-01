import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import BankHeader from "../features/banking/BankHeader";
import Balance from "../features/banking/Balance";
import Transfer from "../features/banking/Transfer";
import Loan from "../features/banking/Loan";
import CloseAccount from "../features/banking/CloseAccount";
import BankFooter from "../features/banking/BankFooter";
import MovementList from "../features/banking/MovementList";

function AppLayout() {
  const { id } = useParams();
  const isAuthenticated = sessionStorage.getItem("auth") === "true";
  const { accounts } = useSelector((state) => state.accounts);
  const currentAccount = accounts.find((acc) => acc.id === id);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!currentAccount) return;

  return (
    <div className="bg-stone-600">
      <section className="mx-auto grid h-[100dvh] max-w-[110rem] grid-rows-[auto_auto_1fr_auto] px-12 py-6 text-5xl">
        <BankHeader currentAccount={currentAccount} />
        <Balance currentAccount={currentAccount} />
        <main className="no-scrollbar mt-3 grid grid-cols-2 grid-rows-[22rem_22rem_22rem] gap-6 overflow-y-scroll px-4">
          <MovementList currentAccount={currentAccount} />
          <Transfer currentAccount={currentAccount} />
          <Loan currentAccount={currentAccount} />
          <CloseAccount currentAccount={currentAccount} />
        </main>
        <BankFooter currentAccount={currentAccount} />
      </section>
    </div>
  );
}

export default AppLayout;
