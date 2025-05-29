import LinkButton from "./LinkButton";

function SiteError() {
  return (
    <div className="mx-auto my-20 flex w-[30rem] flex-col rounded-[7px] bg-stone-500 px-7 py-5 text-stone-100 shadow-lg shadow-stone-700">
      <h1 className="mb-3 text-xl font-semibold">Er ging iets fout... !!</h1>
      <p className="mb-10">Keer terug naar de homepage en begin opnieuw.</p>
      <div>
        <LinkButton type="back" to="/">
          &larr; Ga terug
        </LinkButton>
      </div>
    </div>
  );
}

export default SiteError;
