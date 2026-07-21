import { Link, useParams } from "react-router";
import { projects } from "../data/Projects";


function ProjectDetails() {
  const { id } = useParams<{ id: string }>();

  const projectId = Number(id);

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="flex min-h-[65vh] items-center bg-[#F6F8FB] px-6 py-20 lg:px-8">
        <div className="mx-auto w-full max-w-3xl text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF4FB] text-xl font-bold text-[#0170C1]">
            !
          </span>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
            Projet introuvable
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0F2742]">
            Cette mission n’existe pas.
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#667085]">
            Le projet recherché a peut-être été supprimé ou son identifiant
            n’est pas valide.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#0170C1] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005FA3]"
          >
            Retour aux projets
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-[#E3E8EF] bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0170C1] transition-colors hover:text-[#005FA3]"
          >
            <span aria-hidden="true">←</span>
            Retour aux projets
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-2xl border border-[#E3E8EF] bg-[#F6F8FB]">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0170C1]">
              {project.category}
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-[#0F2742] sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#667085]">
              {project.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-[#D9E2EC] bg-[#F6F8FB] px-3 py-2 text-sm font-semibold text-[#475467]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#0170C1] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#005FA3] hover:shadow-md"
            >
              Postuler à cette mission
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E3E8EF] bg-[#F6F8FB] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-[#E3E8EF] bg-white p-6">
              <p className="text-sm font-medium text-[#667085]">
                Budget
              </p>

              <p className="mt-3 font-bold text-[#0F2742]">
                {project.budget}
              </p>
            </article>

            <article className="rounded-xl border border-[#E3E8EF] bg-white p-6">
              <p className="text-sm font-medium text-[#667085]">
                Durée
              </p>

              <p className="mt-3 font-bold text-[#0F2742]">
                {project.duration}
              </p>
            </article>

            <article className="rounded-xl border border-[#E3E8EF] bg-white p-6">
              <p className="text-sm font-medium text-[#667085]">
                Localisation
              </p>

              <p className="mt-3 font-bold text-[#0F2742]">
                {project.location}
              </p>
            </article>

            <article className="rounded-xl border border-[#E3E8EF] bg-white p-6">
              <p className="text-sm font-medium text-[#667085]">
                Compétences
              </p>

              <p className="mt-3 font-bold text-[#0F2742]">
                {project.skills.length} requises
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetails;