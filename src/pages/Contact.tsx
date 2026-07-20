import { useState, type FormEvent } from "react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitted(true);
    form.reset();
  };

  return (
    <>
      <section className="border-b border-[#E3E8EF] bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
              Contact
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-[#0F2742] sm:text-5xl">
              Présentez-nous votre besoin.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
              Vous recherchez un freelance, une mission ou un partenariat ?
              Partagez les informations essentielles et l’équipe Talentra vous
              répondra avec les prochaines étapes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F8FB] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-6">
            <div className="rounded-xl border border-[#E3E8EF] bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#0170C1]">
                Pour les entreprises
              </p>

              <h2 className="mt-3 text-xl font-bold text-[#0F2742]">
                Recrutez une expertise adaptée.
              </h2>

              <p className="mt-4 leading-7 text-[#667085]">
                Décrivez votre projet, les compétences recherchées, votre délai
                et le niveau d’expérience attendu.
              </p>
            </div>

            <div className="rounded-xl border border-[#E3E8EF] bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#0170C1]">
                Pour les freelances
              </p>

              <h2 className="mt-3 text-xl font-bold text-[#0F2742]">
                Accédez à de nouvelles opportunités.
              </h2>

              <p className="mt-4 leading-7 text-[#667085]">
                Présentez votre profil, vos compétences, vos domaines
                d’intervention et vos disponibilités.
              </p>
            </div>

            <div className="rounded-xl bg-[#0F2742] p-7">
              <p className="text-sm font-semibold text-[#9FD3F2]">
                Délai de réponse indicatif
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                Sous 24 à 48 heures
              </p>

              <p className="mt-3 text-sm leading-6 text-[#C8D6E5]">
                Chaque demande est examinée afin d’identifier le parcours le
                plus adapté.
              </p>
            </div>
          </aside>

          <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0F2742]">
                Envoyer une demande
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Les champs marqués comme obligatoires doivent être renseignés.
              </p>
            </div>

            {isSubmitted && (
              <div
                className="mb-7 rounded-lg border border-[#B7E4C7] bg-[#EDF9F1] px-5 py-4"
                role="status"
              >
                <p className="font-semibold text-[#176B3A]">
                  Votre demande a bien été enregistrée.
                </p>

                <p className="mt-1 text-sm text-[#327A4D]">
                  L’équipe Talentra vous répondra dans les meilleurs délais.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              onChange={() => setIsSubmitted(false)}
              className="grid gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-semibold text-[#344054]"
                  >
                    Prénom
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="Votre prénom"
                    className="mt-2 w-full rounded-lg border border-[#D0D5DD] bg-white px-4 py-3 text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="text-sm font-semibold text-[#344054]"
                  >
                    Nom
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Votre nom"
                    className="mt-2 w-full rounded-lg border border-[#D0D5DD] bg-white px-4 py-3 text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#344054]"
                >
                  Adresse e-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="nom@entreprise.com"
                  className="mt-2 w-full rounded-lg border border-[#D0D5DD] bg-white px-4 py-3 text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="profile"
                    className="text-sm font-semibold text-[#344054]"
                  >
                    Votre profil
                  </label>

                  <select
                    id="profile"
                    name="profile"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-lg border border-[#D0D5DD] bg-white px-4 py-3 text-[#172033] outline-none transition focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]"
                  >
                    <option value="" disabled>
                      Sélectionnez
                    </option>
                    <option value="company">Entreprise</option>
                    <option value="freelancer">Freelance</option>
                    <option value="partner">Partenaire</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-[#344054]"
                  >
                    Objet
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-lg border border-[#D0D5DD] bg-white px-4 py-3 text-[#172033] outline-none transition focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]"
                  >
                    <option value="" disabled>
                      Sélectionnez
                    </option>
                    <option value="mission">Publier une mission</option>
                    <option value="profile">Proposer mon profil</option>
                    <option value="partnership">Proposer un partenariat</option>
                    <option value="support">Demander une assistance</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#344054]"
                >
                  Votre message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Décrivez votre besoin, vos objectifs et les principales contraintes du projet."
                  className="mt-2 w-full resize-y rounded-lg border border-[#D0D5DD] bg-white px-4 py-3 text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]"
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-[#E3E8EF] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-[#667085]">
                  En envoyant ce formulaire, vous acceptez que les informations
                  renseignées soient utilisées pour traiter votre demande.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-[#0170C1] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#005FA3] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0170C1] focus-visible:ring-offset-2"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;