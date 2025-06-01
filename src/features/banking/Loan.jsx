import { useRef, useState } from "react";
import LinkButton from "../../ui/LinkButton";
import { useDispatch } from "react-redux";
import { checkApproval } from "../../utils/helpers";
import { loanApproved } from "../user/accountsSlice";

function Loan({ currentAccount }) {
  const form = useRef();
  const [error, setError] = useState("");
  const [approval, setApproval] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.ammount <= 0) {
      setError("Bedrag moet minstens 1 euro zijn");
      return;
    }

    async function getApproval() {
      try {
        setIsloading(true);
        const isApproved = await checkApproval(data.ammount, currentAccount);

        if (!isApproved) {
          setApproval("false");
          return;
        }

        setApproval("true");
        dispatch(
          loanApproved({
            id: currentAccount.id,
            ammount: +data.ammount,
            description: data.description,
          }),
        );
      } catch {
        throw new Error("Er ging iets fout");
      } finally {
        setTimeout(() => {
          setApproval("");
          setIsloading(false);
          form.current.reset();
        }, 2300);
      }
    }

    getApproval();
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg bg-stone-700 px-7 py-5 text-stone-100"
    >
      <h3 className="mb-8 text-3xl">Lening aanvragen</h3>
      <div className="mx-auto mb-4 flex w-[85%] items-center">
        <label className="mr-auto text-xl">Bedrag:</label>
        <input
          type="number"
          name="ammount"
          placeholder="Bv: 100"
          required
          className="w-[75%] rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] text-stone-800 placeholder:text-stone-400"
        />
      </div>
      <div className="mx-auto mb-4 flex w-[85%] items-center">
        <label className="mr-auto text-xl">Beschrijving:</label>
        <input
          type="text"
          name="description"
          placeholder="Bv: Aankoop auto"
          required
          className="w-[75%] rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] text-stone-800 placeholder:text-stone-400"
        />
      </div>

      {error && (
        <p className="mx-auto w-[85%] rounded-md bg-red-400 px-2 py-1 text-sm text-red-50 shadow-lg shadow-stone-800">
          {error}
        </p>
      )}
      {approval && (
        <p
          className={`mx-auto w-[85%] rounded-md ${approval === "false" ? "bg-red-400" : "bg-green-400"} px-2 py-1 text-sm text-red-50 shadow-lg shadow-stone-800`}
        >
          {approval === "true" && "Lening goedgekeurd"}
          {approval === "false" && "Lening niet goedgekeurd"}
        </p>
      )}

      <div className="mx-auto mt-auto flex w-[85%] justify-end">
        <LinkButton type="btn" disabled={isLoading}>
          {isLoading ? "In aanvraag..." : "Lening aanvragen"}
        </LinkButton>
      </div>
    </form>
  );
}

export default Loan;
