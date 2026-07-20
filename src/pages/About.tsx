import { Link } from "react-router";

const values = [
  {
    number: "01",
    title: "Exigence",
    description:
      "Chaque collaboration repose sur des compétences vérifiées, des objectifs clairs et un niveau de qualité mesurable.",
  },
  {
    number: "02",
    title: "Transparence",
    description:
      "Entreprises et freelances disposent des informations nécessaires pour prendre de bonnes décisions.",
  },
  {
    number: "03",
    title: "Impact",
    description:
      "Talentra privilégie les collaborations capables de produire des résultats concrets et durables.",
  },
];

const steps = [
  {
    number: "1",
    title: "Définissez votre besoin",
    description:
      "Présentez votre mission, vos objectifs, les compétences recherchées et vos principales contraintes.",
  },
  {
    number: "2",
    title: "Identifiez les bons profils",
    description:
      "Découvrez des freelances spécialisés dont l’expérience correspond à votre projet.",
  },
  {
    number: "3",
    title: "Lancez la collaboration",
    description:
      "Échangez, validez les modalités de la mission et démarrez votre projet dans un cadre structuré.",
  },
];

function About() {
  return (
    <>
      <section className="border-b border-[#E3E8EF] bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
              À propos de Talentra
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.035em] text-[#0F2742] sm:text-5xl lg:text-6xl">
              Faciliter les collaborations qui font avancer les projets.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#667085]">
              Talentra rapproche les entreprises qui recherchent une expertise
              précise et les professionnels indépendants capables de transformer
              une ambition en résultat concret.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-[#0170C1] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#005FA3] hover:shadow-md"
              >
                Publier une mission
              </Link>

              <Link
                to="/"
                className="rounded-lg border border-[#D0D5DD] bg-white px-6 py-3.5 text-sm font-semibold text-[#344054] transition-colors hover:border-[#0170C1] hover:text-[#0170C1]"
              >
                Découvrir les talents
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#D9E2EC] bg-[#F6F8FB] p-8 lg:p-10">
            <p className="text-sm font-semibold text-[#0170C1]">
              Notre ambition
            </p>

            <blockquote className="mt-5 text-2xl font-semibold leading-10 text-[#0F2742]">
              « Créer un environnement dans lequel chaque entreprise peut
              accéder aux compétences adaptées à son niveau d’ambition. »
            </blockquote>

            <div className="mt-8 border-t border-[#D9E2EC] pt-7">
              <p className="text-sm leading-7 text-[#667085]">
                La plateforme est pensée pour réduire les recherches
                interminables, améliorer la qualité des mises en relation et
                structurer les premières étapes de chaque collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F8FB] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
              Nos principes
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2742] sm:text-4xl">
              Une plateforme fondée sur des standards professionnels.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border border-[#E3E8EF] bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#B8D9EE] hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#0170C1]">
                  {value.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-[#0F2742]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E3E8EF] bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
                Comment ça fonctionne
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2742] sm:text-4xl">
                De votre besoin à la collaboration.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#667085]">
                Un parcours simple, lisible et pensé pour accélérer la mise en
                relation.
              </p>
            </div>

            <div className="space-y-5">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-xl border border-[#E3E8EF] bg-[#F9FAFB] p-6 sm:grid-cols-[56px_1fr]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0170C1] text-sm font-bold text-white">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-[#0F2742]">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#667085]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F2742] px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#9FD3F2]">
              Votre prochain projet peut commencer ici
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Trouvez les compétences capables de faire la différence.
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2742] transition-colors hover:bg-[#EAF4FB]"
          >
            Contacter Talentra
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;