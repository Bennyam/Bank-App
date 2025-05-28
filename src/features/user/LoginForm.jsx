import { Form } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function LoginForm() {
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
          className="rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem]"
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
          className="rounded-sm border-none bg-stone-100 px-2 py-2.5 text-[1rem]"
          required
        />
      </div>
      <div>
        <LinkButton type="btn">Login</LinkButton>
      </div>
    </Form>
  );
}

export default LoginForm;
