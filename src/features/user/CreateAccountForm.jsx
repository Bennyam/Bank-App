/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useActionData } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import store from "../../store";
import { addAccount } from "./accountsSlice";
import { useEffect, useState } from "react";

function CreateAccountForm() {
  const formErrors = useActionData();
  const [viewPassword, setViewPasword] = useState(false);

  useEffect(() => {
    sessionStorage.removeItem("newAcc");
  }, []);

  return (
    <Form
      method="POST"
      className="mx-auto my-20 flex w-[30rem] flex-col gap-6 rounded-[7px] bg-neutral-700 px-7 py-5 shadow-lg shadow-stone-800"
    >
      <div className="flex flex-col gap-2">
        <label className="text-base font-semibold text-stone-100">Naam</label>
        <input
          type="text"
          name="name"
          placeholder="Volledige naam"
          className="rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] placeholder:text-stone-400"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-base font-semibold text-stone-100">
          Email adres
        </label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@example.com"
          className="rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] placeholder:text-stone-400"
          required
        />
        {formErrors?.email && (
          <p className="rounded-md bg-red-400 px-2 py-1 text-red-50 shadow-lg shadow-stone-800">
            {formErrors.email}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-base font-semibold text-stone-100">
          Wachtwoord
        </label>
        <input
          type={viewPassword ? "text" : "password"}
          name="password"
          placeholder="********"
          className="rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] placeholder:text-stone-400"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-base font-semibold text-stone-100">
          Bevestig wachtwoord
        </label>
        <input
          type={viewPassword ? "text" : "password"}
          name="pwcheck"
          placeholder="********"
          className="rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] placeholder:text-stone-400"
          required
        />
        {formErrors?.password && (
          <p className="rounded-md bg-red-400 px-2 py-1 text-red-50 shadow-lg shadow-stone-800">
            {formErrors.password}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <LinkButton type="btn">Create account</LinkButton>
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={() => setViewPasword(!viewPassword)}
            className="h-5 w-5 accent-green-400"
          />
          <span className="ml-3 text-base text-stone-100">Toon wachtwoord</span>
        </div>
      </div>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const state = store.getState();
  const { accounts } = state.accounts;
  const exists = accounts.find(
    (acc) => acc.email.toLowerCase() === data.email.toLowerCase(),
  );

  const errors = {};

  if (data.password !== data.pwcheck)
    errors.password = "Wachtwoorden komen niet overeen !!!";
  if (exists) errors.email = "Er bestaat al een account op dit email adres !!!";

  if (Object.keys(errors).length > 0) return errors;

  const account = {
    id: crypto.randomUUID(),
    name: data.name,
    email: data.email.toLowerCase(),
    password: data.password,
    movements: [
      {
        ammount: 1000,
        date: new Date().toISOString(),
        description: "Startpremie",
      },
    ],
  };

  store.dispatch(addAccount(account));
  sessionStorage.setItem("newAcc", "true");

  return redirect(`/account/succes/${account.id}`);
}

export default CreateAccountForm;
