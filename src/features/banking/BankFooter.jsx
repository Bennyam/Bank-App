import { formatCurrency } from "../../utils/helpers";

function BankFooter({ currentAccount }) {
  const inkomsten = currentAccount.movements
    .map((mov) => mov.ammount)
    .filter((ammount) => ammount >= 0)
    .reduce((sum, cur) => sum + cur, 0);

  const uitgaven = currentAccount.movements
    .map((mov) => mov.ammount)
    .filter((ammount) => ammount < 0)
    .reduce((sum, cur) => sum + cur, 0);

  const interesten = currentAccount.movements
    .map((mov) => mov.ammount)
    .filter((ammount) => ammount > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int) => int >= 1)
    .reduce((sum, int) => sum + int, 0);

  return (
    <div>
      <div className="mx-auto mt-5 flex w-[98%] items-center justify-between border-y-2 border-stone-500 bg-stone-700 px-15 py-4 text-3xl">
        <p className="space-x-4 text-green-500">
          <span>Inkomsten</span>
          <span>{formatCurrency(inkomsten)}</span>
        </p>
        <p className="space-x-4 text-red-500">
          <span>Uitgaven</span>
          <span>{formatCurrency(Math.abs(uitgaven))}</span>
        </p>
        <p className="space-x-4 text-green-500">
          <span>Intersten</span>
          <span>{formatCurrency(interesten)}</span>
        </p>
      </div>
      <p className="mx-auto mt-3 w-[80%] text-center text-sm text-stone-400">
        Copyright &copy; Ameryckx Ben. All rights reserved.
      </p>
    </div>
  );
}

export default BankFooter;
