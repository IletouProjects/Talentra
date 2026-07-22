import { useEffect, useState } from "react";
import type { Talent } from "../types/Talent";
import TalentCard from "../components/TalentCard";

const API_URL = "https://jsonplaceholder.typicode.com/users";
//const API_URL = "https://jsonplaceholder.typicode.com/users-invalid";

function Talents() {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requestKey, setRequestKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTalents() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `La récupération des profils a échoué (${response.status}).`,
          );
        }

        const data: Talent[] = await response.json();

        setTalents(data);
      } catch (requestError) {
        if (
          requestError instanceof DOMException &&
          requestError.name === "AbortError"
        ) {
          return;
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : "Une erreur inattendue est survenue.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchTalents();

    return () => {
      controller.abort();
    };
  }, [requestKey]);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredTalents = talents.filter((talent) => {
    const searchableContent = [
      talent.name,
      talent.username,
      talent.email,
      talent.address.city,
      talent.company.name,
      talent.company.catchPhrase,
    ]
      .join(" ")
      .toLowerCase();

    return searchableContent.includes(normalizedSearch);
  });

  return (
    <>
      <section className="border-b border-[#E3E8EF] bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
            Réseau de talents
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.035em] text-[#0F2742] sm:text-5xl">
                Découvrez les professionnels disponibles pour vos projets.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
                Recherchez un talent selon son nom, sa localisation, son
                entreprise ou son domaine professionnel.
              </p>
            </div>

            <div>
              <label
                htmlFor="talent-search"
                className="text-sm font-semibold text-[#344054]"
              >
                Rechercher un talent
              </label>

              <div className="relative mt-2">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#98A2B3]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>

                <input
                  id="talent-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Nom, ville, entreprise..."
                  className="w-full rounded-xl border border-[#D0D5DD] bg-white py-3.5 pl-12 pr-4 text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#0170C1] focus:ring-4 focus:ring-[#D9EDF9]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[500px] bg-[#F6F8FB] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {isLoading && (
            <div
              className="flex min-h-[360px] flex-col items-center justify-center"
              role="status"
              aria-live="polite"
            >
              <span className="h-11 w-11 animate-spin rounded-full border-4 border-[#D9EDF9] border-t-[#0170C1]" />

              <p className="mt-5 font-semibold text-[#0F2742]">
                Chargement des talents...
              </p>

              <p className="mt-2 text-sm text-[#667085]">
                Talentra récupère les profils disponibles.
              </p>
            </div>
          )}

          {!isLoading && error && (
            <div
              className="mx-auto max-w-2xl rounded-2xl border border-[#F4C7C3] bg-white p-8 text-center shadow-sm"
              role="alert"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1F0] text-xl font-bold text-[#B42318]">
                !
              </span>

              <h2 className="mt-5 text-xl font-bold text-[#0F2742]">
                Impossible de charger les profils
              </h2>

              <p className="mt-3 leading-7 text-[#667085]">
                {error}
              </p>

              <button
                type="button"
                onClick={() => setRequestKey((currentKey) => currentKey + 1)}
                className="mt-6 rounded-lg bg-[#0170C1] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005FA3]"
              >
                Réessayer
              </button>
            </div>
          )}

          {!isLoading && !error && (
            <>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-[#667085]">
                  <span className="font-bold text-[#0F2742]">
                    {filteredTalents.length}
                  </span>{" "}
                  {filteredTalents.length > 1
                    ? "profils trouvés"
                    : "profil trouvé"}
                </p>

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="w-fit text-sm font-semibold text-[#0170C1] hover:text-[#005FA3]"
                  >
                    Effacer la recherche
                  </button>
                )}
              </div>

              {filteredTalents.length > 0 ? (
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTalents.map((talent) => (
                    <TalentCard key={talent.id} talent={talent} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-[#E3E8EF] bg-white px-6 py-16 text-center">
                  <h2 className="text-xl font-bold text-[#0F2742]">
                    Aucun talent trouvé
                  </h2>

                  <p className="mt-3 text-[#667085]">
                    Modifiez votre recherche ou utilisez un terme plus général.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="mt-6 rounded-lg border border-[#D0D5DD] bg-white px-5 py-3 text-sm font-semibold text-[#344054] transition-colors hover:border-[#0170C1] hover:text-[#0170C1]"
                  >
                    Réinitialiser
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Talents;