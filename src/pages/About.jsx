function About() {
  return (
    <section className="mx-auto my-16 grid w-[clamp(50rem,80%,57rem)] grid-cols-2 items-center gap-[5rem]">
      <div>
        <h2 className="mb-7 text-[2.5rem] leading-[1.2] font-semibold text-stone-100">
          Start homebanking. <br /> Gratis en overal.
        </h2>
        <p className="text-base text-stone-100">
          Met de gratis homebank app kan je overal ter wereld steeds je
          bankzaken regelen. Met KBA kan je ook steeds rekenen op een veilige
          verbinding zodat jouw gegevens altijd veilig zijn. KBA zorgt er voor
          dat je op een eenvoudige manier al je bankzaken kan regelen.
        </p>
      </div>
      <img src="img-2.jpg" className="w-[100%]" />
    </section>
  );
}

export default About;
