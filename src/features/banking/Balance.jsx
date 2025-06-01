import { formatCurrency } from "../../utils/helpers";

function Balance({ currentAccount }) {
  const balance = currentAccount.movements
    .map((mov) => mov.ammount)
    .reduce((sum, cur) => sum + cur, 0);
  const date = new Intl.DateTimeFormat("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="mt-3 mb-2 flex items-center justify-between px-4 text-4xl text-stone-100">
      <div className="text-2xl">
        <p className="font-semibold">Huidig saldo</p>
        <p className="text-base">Sedert {date}</p>
      </div>
      <p className="text-5xl">{formatCurrency(balance)}</p>
    </div>
  );
}

export default Balance;
