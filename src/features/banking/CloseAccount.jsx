import { useState } from "react";
import LinkButton from "../../ui/LinkButton";
import { useDispatch } from "react-redux";
import { deleteAccount } from "../user/accountsSlice";
import { useNavigate } from "react-router-dom";

function CloseAccount({ currentAccount }) {
  const [viewPassword, setViewPasword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const isAuthorized = data.email === currentAccount.email;

    if (!isAuthorized) {
      setError("U bent niet gemachtigd dit account te verwijderen !!!");
      return;
    }

    if (data.password !== data.pwcheck) {
      setError("Wachtwoordern komen niet overeen !!!");
      return;
    }

    dispatch(deleteAccount(currentAccount.id));
    return navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg bg-stone-700 px-7 py-5 text-stone-100"
    >
      <h3 className="mb-8 text-3xl">Overschrijven</h3>
      <div className="mx-auto mb-4 flex w-[85%] items-center">
        <label className="mr-auto text-xl">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@email.com"
          required
          className="w-[75%] rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] text-stone-800 placeholder:text-stone-400"
        />
      </div>
      <div className="mx-auto mb-4 flex w-[85%] items-center">
        <label className="mr-auto text-xl">Wachtwoord:</label>
        <input
          type={viewPassword ? "text" : "password"}
          name="password"
          placeholder="********"
          required
          className="w-[75%] rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] text-stone-800 placeholder:text-stone-400"
        />
      </div>
      <div className="mx-auto mb-4 flex w-[85%] items-center">
        <label className="mr-auto text-xl">Wachtwoord :</label>
        <input
          type={viewPassword ? "text" : "password"}
          name="pwcheck"
          placeholder="********"
          required
          className="w-[75%] rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] text-stone-800 placeholder:text-stone-400"
        />
      </div>
      {error && (
        <p className="mx-auto w-[85%] rounded-md bg-red-400 px-2 py-1 text-sm text-red-50 shadow-lg shadow-stone-800">
          {error}
        </p>
      )}
      <div className="mx-auto mt-auto flex w-[85%] items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={() => setViewPasword(!viewPassword)}
            className="inline-block h-5 w-5 accent-green-400"
          />
          <p className="ml-3 inline-block text-base text-stone-100">
            Toon wachtwoord
          </p>
        </div>
        <LinkButton type="btn">account afsluiten</LinkButton>
      </div>
    </form>
  );
}

export default CloseAccount;
