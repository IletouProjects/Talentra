import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router";
import InputField from "../components/InputField";

type FormErrors = {
  fullName?: string;
  email?: string;
  profile?: string;
  subject?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [searchParams] = useSearchParams();

  const selectedTalent = searchParams.get("talent") ?? "";
  const selectedTalentEmail = searchParams.get("email") ?? "";

  const initialSubject = selectedTalent
    ? `Demande de collaboration avec ${selectedTalent}`
    : "";

  const initialMessage = selectedTalent
    ? `Bonjour ${selectedTalent},

Je souhaite échanger avec vous concernant une mission sur Talentra.

Voici les principales informations sur mon besoin :

`
    : "";

  // Un état distinct pour chaque valeur du formulaire
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState(initialMessage);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const clearFieldError = (field: keyof FormErrors) => {
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const validationErrors: FormErrors = {};

    if (!fullName.trim()) {
      validationErrors.fullName = "Le nom complet est obligatoire.";
    } else if (fullName.trim().length < 3) {
      validationErrors.fullName =
        "Le nom doit contenir au moins 3 caractères.";
    }

    if (!email.trim()) {
      validationErrors.email = "L’adresse e-mail est obligatoire.";
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      validationErrors.email =
        "Saisissez une adresse e-mail valide.";
    }

    if (!profile) {
      validationErrors.profile = "Sélectionnez votre profil.";
    }

    if (!subject.trim()) {
      validationErrors.subject = "L’objet est obligatoire.";
    } else if (subject.trim().length < 5) {
      validationErrors.subject =
        "L’objet doit contenir au moins 5 caractères.";
    }

    if (!message.trim()) {
      validationErrors.message = "Le message est obligatoire.";
    } else if (message.trim().length < 20) {
      validationErrors.message =
        "Le message doit contenir au moins 20 caractères.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setProfile("");
    setSubject("");
    setMessage("");
    setErrors({});
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setSuccessMessage("");

    const isFormValid = validateForm();

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);

    // Simulation d'un appel API
    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1500);
    });

    setIsSubmitting(false);
    setSuccessMessage(
      "Votre demande a été envoyée avec succès. L’équipe Talentra vous répondra sous 24 à 48 heures.",
    );

    resetForm();
  };

  return (
    <>
      <section className="border-b border-[#E3E8EF] bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
            Contact
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.035em] text-[#0F2742] sm:text-5xl">
            Présentez-nous votre besoin.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
            Renseignez les informations nécessaires pour publier une
            mission, proposer votre profil ou contacter un talent.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F8FB] px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="space-y-6">
            {selectedTalent && (
              <div className="rounded-2xl border border-[#B8D9EE] bg-[#F1F8FD] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0170C1]">
                  Talent sélectionné
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0170C1] font-bold text-white">
                    {selectedTalent
                      .split(" ")
                      .map((part) => part.charAt(0))
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <p className="font-bold text-[#0F2742]">
                      {selectedTalent}
                    </p>

                    {selectedTalentEmail && (
                      <p className="mt-1 truncate text-sm text-[#667085]">
                        {selectedTalentEmail.toLowerCase()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="rounded-2xl bg-[#0F2742] p-7">
              <p className="text-sm font-semibold text-[#9FD3F2]">
                Traitement des demandes
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white">
                Réponse sous 24 à 48 heures
              </h2>

              <p className="mt-4 leading-7 text-[#C8D6E5]">
                Chaque demande est examinée avant la mise en relation
                avec un talent ou une entreprise.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E3E8EF] bg-white p-7">
              <h2 className="font-bold text-[#0F2742]">
                Avant l’envoi
              </h2>

              <ul className="mt-5 space-y-4 text-sm leading-6 text-[#667085]">
                <li>• Décrivez précisément votre besoin.</li>
                <li>• Indiquez les objectifs principaux.</li>
                <li>• Mentionnez vos délais ou contraintes.</li>
              </ul>
            </div>
          </aside>

          <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0F2742]">
                Envoyer une demande
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Les champs marqués d’un astérisque sont obligatoires.
              </p>
            </div>

            {successMessage && (
              <div
                className="mb-8 rounded-xl border border-[#ABEFC6] bg-[#ECFDF3] p-5"
                role="status"
                aria-live="polite"
              >
                <p className="font-semibold text-[#067647]">
                  Demande envoyée
                </p>

                <p className="mt-1 text-sm leading-6 text-[#087443]">
                  {successMessage}
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid gap-6"
            >
              <InputField
                id="fullName"
                label="Nom complet"
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);
                  clearFieldError("fullName");
                }}
                placeholder="Ex. Komlan Afangbemi"
                autoComplete="name"
                error={errors.fullName}
                disabled={isSubmitting}
                required
              />

              <InputField
                id="email"
                label="Adresse e-mail"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearFieldError("email");
                }}
                placeholder="nom@entreprise.com"
                autoComplete="email"
                error={errors.email}
                disabled={isSubmitting}
                required
              />

              <div>
                <label
                  htmlFor="profile"
                  className="text-sm font-semibold text-[#344054]"
                >
                  Votre profil
                  <span
                    className="ml-1 text-[#D92D20]"
                    aria-hidden="true"
                  >
                    *
                  </span>
                </label>

                <select
                  id="profile"
                  name="profile"
                  value={profile}
                  onChange={(event) => {
                    setProfile(event.target.value);
                    clearFieldError("profile");
                  }}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.profile)}
                  aria-describedby={
                    errors.profile ? "profile-error" : undefined
                  }
                  className={[
                    "mt-2 w-full rounded-lg border bg-white px-4 py-3",
                    "text-[#172033] outline-none transition",
                    "disabled:cursor-not-allowed disabled:bg-[#F2F4F7]",
                    errors.profile
                      ? "border-[#F04438] focus:ring-4 focus:ring-[#FEE4E2]"
                      : "border-[#D0D5DD] focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]",
                  ].join(" ")}
                >
                  <option value="">Sélectionnez votre profil</option>
                  <option value="company">Entreprise</option>
                  <option value="freelancer">Freelance</option>
                  <option value="partner">Partenaire</option>
                </select>

                {errors.profile && (
                  <p
                    id="profile-error"
                    className="mt-2 text-sm font-medium text-[#D92D20]"
                    role="alert"
                  >
                    {errors.profile}
                  </p>
                )}
              </div>

              <InputField
                id="subject"
                label="Objet de la demande"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                  clearFieldError("subject");
                }}
                placeholder="Ex. Recherche d’un développeur React"
                error={errors.subject}
                disabled={isSubmitting}
                required
              />

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#344054]"
                >
                  Votre message
                  <span
                    className="ml-1 text-[#D92D20]"
                    aria-hidden="true"
                  >
                    *
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    clearFieldError("message");
                  }}
                  disabled={isSubmitting}
                  placeholder="Décrivez votre besoin, vos objectifs et vos contraintes."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : "message-help"
                  }
                  className={[
                    "mt-2 w-full resize-y rounded-lg border bg-white px-4 py-3",
                    "text-[#172033] outline-none transition",
                    "placeholder:text-[#98A2B3]",
                    "disabled:cursor-not-allowed disabled:bg-[#F2F4F7]",
                    errors.message
                      ? "border-[#F04438] focus:ring-4 focus:ring-[#FEE4E2]"
                      : "border-[#D0D5DD] focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]",
                  ].join(" ")}
                />

                {errors.message ? (
                  <p
                    id="message-error"
                    className="mt-2 text-sm font-medium text-[#D92D20]"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                ) : (
                  <p
                    id="message-help"
                    className="mt-2 text-xs text-[#667085]"
                  >
                    Minimum : 20 caractères.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-4 border-t border-[#E3E8EF] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-[#667085]">
                  Les informations renseignées seront uniquement utilisées
                  pour traiter votre demande.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-w-48 items-center justify-center gap-3 rounded-lg bg-[#0170C1] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#005FA3] disabled:cursor-not-allowed disabled:bg-[#84BCE2]"
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
                        aria-hidden="true"
                      />

                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer la demande"
                  )}
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