import LinkButton from "../ui/LinkButton";

function Home() {
  return (
    <section className="flex h-[85%] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-5xl font-semibold text-stone-100">
        Start met Homebank.
        <br /> Gratis thuisbankieren voor iedereen.
      </h1>
      <h2 className="mb-6 w-[50%] text-lg text-stone-400">
        Met KBA ben je verzekerd van veilig bankieren overal ter wereld waar je
        ook bent. Onze homebanking zorgt steed voor een veilige verbinding zodat
        jij zonder zorgen kan bankieren.
      </h2>
      <LinkButton to="/login" type="btn">
        Start met homebank
      </LinkButton>
    </section>
  );
}

export default Home;
