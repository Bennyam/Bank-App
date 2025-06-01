import { formatCurrency, formatMovementDate } from "../../utils/helpers";

function Movement({ movement }) {
  const { ammount, description } = movement;
  const date = new Date(movement.date);

  return (
    <li className="flex items-center border-b-1 border-stone-300 px-4 py-4 text-xl">
      <div className="flex flex-col">
        <span
          className={`${ammount > 0 ? "bg-green-500" : "bg-red-500"} rounded-full px-3 text-base font-semibold text-stone-100`}
        >
          {ammount >= 0 ? "Inkomst" : "Uitgave"}
        </span>
        <span className="mt-1 text-center text-sm">
          {formatMovementDate(date)}
        </span>
      </div>
      <span className="ml-10 text-base">{description}</span>
      <span className="ml-auto text-xl font-semibold">
        {formatCurrency(ammount)}
      </span>
    </li>
  );
}

export default Movement;
