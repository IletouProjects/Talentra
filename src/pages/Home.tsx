import { Link } from "react-router";

const expertiseCategories = [
  {
    number: "01",
    title: "Design produit",
    description:
      "Interfaces numériques, expériences utilisateurs et systèmes de design cohérents.",
  },
  {
    number: "02",
    title: "Développement",
    description:
      "Applications web, plateformes métier et produits numériques performants.",
  },
  {
    number: "03",
    title: "Marketing digital",
    description:
      "Stratégie, acquisition, contenus et développement de communautés.",
  },
];

const advantages = [
  "Profils spécialisés",
  "Mise en relation rapide",
  "Collaboration transparente",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b border-[#E3E8EF] bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CDE5F5] bg-[#F1F8FD] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#0170C1]" />

              <span className="text-sm font-semibold text-[#015A9A]">
                Des talents qualifiés pour vos projets
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.07] tracking-[-0.045em] text-[#0F2742] sm:text-6xl">
              Construisez vos projets avec les bonnes compétences.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
              Talentra met en relation les entreprises avec des freelances
              sélectionnés selon leur expertise, leur expérience et leur
              capacité à produire des résultats.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#0170C1] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#005FA3] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0170C1] focus-visible:ring-offset-2"
              >
                Trouver un talent
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-lg border border-[#D0D5DD] bg-white px-6 py-3.5 text-sm font-semibold text-[#344054] transition-all duration-200 hover:border-[#0170C1] hover:bg-[#F8FBFD] hover:text-[#015A9A]"
              >
                Découvrir Talentra
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {advantages.map((advantage) => (
                <div
                  key={advantage}
                  className="flex items-center gap-2 text-sm font-medium text-[#475467]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF4FB] text-xs font-bold text-[#0170C1]">
                    ✓
                  </span>

                  {advantage}
                </div>
              ))}
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-6 border-t border-[#E3E8EF] pt-8 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-[#0F2742]">120+</p>
                <p className="mt-1 text-sm text-[#667085]">
                  Talents disponibles
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#0F2742]">35</p>
                <p className="mt-1 text-sm text-[#667085]">
                  Domaines d’expertise
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#0F2742]">96 %</p>
                <p className="mt-1 text-sm text-[#667085]">
                  Taux de satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Carte profil */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-[#EAF4FB]" />

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D5EBF8] blur-3xl" />

            <article className="relative overflow-hidden rounded-2xl border border-[#D9E2EC] bg-white shadow-[0_24px_70px_rgba(15,39,66,0.14)]">
              <div className="flex items-center justify-between border-b border-[#E3E8EF] px-7 py-5">
                <div>
                  <p className="text-sm font-medium text-[#667085]">
                    Talent recommandé
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-[#0F2742]">
                    Ama Koffi
                  </h2>
                </div>

                <span className="rounded-full border border-[#B7E4C7] bg-[#EDF9F1] px-3 py-1.5 text-xs font-semibold text-[#176B3A]">
                  Disponible
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FB] text-xl font-bold text-[#0170C1]">
                    AK
                  </div>

                  <div>
                    <p className="font-bold text-[#172033]">
                      Product Designer
                    </p>

                    <p className="mt-1 text-sm text-[#667085]">
                      Lomé, Togo · 5 ans d’expérience
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["UX Research", "UI Design", "Design System"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-[#E3E8EF] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#475467]"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#E3E8EF] pt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#98A2B3]">
                      Projets réalisés
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#0F2742]">
                      28
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#98A2B3]">
                      Satisfaction
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#0170C1]">
                      98 %
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-7 flex w-full items-center justify-center rounded-lg bg-[#0F2742] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#173B5F]"
                >
                  Consulter le profil
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="bg-[#F6F8FB] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
              Expertises
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2742] sm:text-4xl">
              Les compétences adaptées à chaque étape de votre projet.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
              Identifiez rapidement les profils capables de répondre à vos
              besoins opérationnels et stratégiques.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {expertiseCategories.map((category) => (
              <article
                key={category.title}
                className="group rounded-xl border border-[#E3E8EF] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D9EE] hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#0170C1]">
                  {category.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-[#0F2742] transition-colors group-hover:text-[#0170C1]">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  {category.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0170C1]"
                >
                  Trouver un expert
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="border-y border-[#E3E8EF] bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
              Fonctionnement
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2742] sm:text-4xl">
              Une mise en relation simple et structurée.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#667085]">
              Talentra réduit le temps nécessaire pour identifier et contacter
              les compétences adaptées.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              {
                number: "01",
                title: "Présentez votre projet",
                description:
                  "Décrivez les objectifs, les compétences attendues et les contraintes principales.",
              },
              {
                number: "02",
                title: "Découvrez les profils adaptés",
                description:
                  "Consultez une sélection de professionnels correspondant à votre besoin.",
              },
              {
                number: "03",
                title: "Démarrez la collaboration",
                description:
                  "Échangez avec le talent choisi et définissez les modalités de la mission.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="grid gap-5 rounded-xl border border-[#E3E8EF] bg-[#F9FAFB] p-6 sm:grid-cols-[64px_1fr]"
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
      </section>

      {/* CTA */}
      <section className="bg-[#0F2742] px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#9FD3F2]">
              Passez à l’étape suivante
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Trouvez le talent capable d’accélérer votre projet.
            </h2>

            <p className="mt-4 leading-7 text-[#C8D6E5]">
              Présentez votre besoin et commencez une collaboration adaptée à
              vos objectifs.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2742] transition-colors hover:bg-[#EAF4FB]"
          >
            Publier une mission
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;