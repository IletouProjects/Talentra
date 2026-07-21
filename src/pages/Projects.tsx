import Card from "../components/Card";
import { projects } from "../data/Projects";


function Projects() {
  return (
    <>
      <section className="border-b border-[#E3E8EF] bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0170C1]">
            Missions disponibles
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.035em] text-[#0F2742] sm:text-5xl">
                Découvrez les projets qui recherchent votre expertise.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
                Explorez une sélection de missions en design, développement,
                marketing et création de produits numériques.
              </p>
            </div>

            <div className="rounded-xl border border-[#D9E2EC] bg-[#F6F8FB] p-6">
              <p className="text-sm font-medium text-[#667085]">
                Missions actuellement disponibles
              </p>

              <p className="mt-2 text-3xl font-bold text-[#0F2742]">
                {projects.length}
              </p>

              <p className="mt-2 text-sm text-[#667085]">
                Sélectionnez une mission pour consulter ses détails.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F8FB] px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                id={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;