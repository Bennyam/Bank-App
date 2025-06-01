import { useState } from "react";
import LinkButton from "../../ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import { transferTo } from "../user/accountsSlice";

function Transfer({ currentAccount }) {
  const [error, setError] = useState("");
  const { accounts } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const account = accounts.find((acc) => acc.email === data.email);

    if (!account || account.email === currentAccount.email) {
      setError("Ongeldig account / Of eigen account");
      return;
    }

    if (data.ammount <= 0) {
      setError("Bedrag moet minstens 1 euro zijn");
      return;
    }

    const newTranfer = {
      fromEmail: currentAccount.email,
      toEmail: account.email,
      ammount: +data.ammount,
      date: new Date().toISOString(),
      description: data.description,
    };

    dispatch(transferTo(newTranfer));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg bg-stone-700 px-7 py-5 text-stone-100"
    >
      <h3 className="mb-8 text-3xl">Overschrijven</h3>
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
        <label className="mr-auto text-xl">Begunstigde:</label>
        <input
          type="email"
          name="email"
          placeholder="Email van begunstigde"
          required
          className="w-[75%] rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] text-stone-800 placeholder:text-stone-400"
        />
      </div>
      <div className="mx-auto mb-4 flex w-[85%] items-center">
        <label className="mr-auto text-xl">Mededeling:</label>
        <input
          type="text"
          name="description"
          placeholder="Korte beschrijving"
          required
          className="w-[75%] rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] text-stone-800 placeholder:text-stone-400"
        />
      </div>
      {error && (
        <p className="mx-auto w-[85%] rounded-md bg-red-400 px-2 py-1 text-sm text-red-50 shadow-lg shadow-stone-800">
          {error}
        </p>
      )}
      <div className="mx-auto mt-auto flex w-[85%] justify-end">
        <LinkButton type="btn">Overschrijven</LinkButton>
      </div>
    </form>
  );
}

export default Transfer;
