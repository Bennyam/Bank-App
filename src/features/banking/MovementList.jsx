import Movement from "./Movement";

function MovementList({ currentAccount }) {
  const movements = currentAccount.movements;
  return (
    <ul className="no-scrollbar row-span-3 overflow-y-scroll rounded-lg bg-stone-200">
      {movements.map((mov, i) => <Movement movement={mov} key={i} />).reverse()}
    </ul>
  );
}

export default MovementList;
