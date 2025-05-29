/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useActionData } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import store from "../../store";
import { useEffect } from "react";

function LoginForm() {
  const formErrors = useActionData();

  useEffect(() => {
    sessionStorage.removeItem("auth");
  }, []);

  return (
    <Form
      method="POST"
      className="mx-auto my-20 flex w-[30rem] flex-col gap-6 rounded-[7px] bg-neutral-700 px-7 py-5 shadow-lg shadow-stone-800"
    >
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
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-base font-semibold text-stone-100">
          Wachtwoord
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          className="rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem] placeholder:text-stone-400"
          required
        />

        {formErrors?.wrong && (
          <p className="rounded-md bg-red-400 px-2 py-1 text-red-50 shadow-lg shadow-stone-800">
            {formErrors.wrong}
          </p>
        )}
      </div>
      <div>
        <LinkButton type="btn">Login</LinkButton>
      </div>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const state = store.getState();
  const { accounts } = state.accounts;
  const account = accounts.find(
    (acc) => acc.email.toLowerCase() === data.email.toLowerCase(),
  );

  const errors = {};

  if (
    !account ||
    data.password !== account.password ||
    data.email !== account.email
  )
    errors.wrong = "Email of wachtwoord onjuist !!!";

  if (Object.keys(errors).length > 0) return errors;

  sessionStorage.setItem("auth", "true");

  return redirect(`/account/${account.id}`);
}

export default LoginForm;
