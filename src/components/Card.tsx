import { Link } from "react-router";

type CardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
};

function Card({
  id,
  image,
  title,
  description,
  category,
}: CardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3E8EF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D9EE] hover:shadow-xl">
      <div className="aspect-[16/10] overflow-hidden bg-[#EAF4FB]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0170C1]">
          {category}
        </p>

        <h2 className="mt-3 text-xl font-bold leading-7 text-[#0F2742]">
          {title}
        </h2>

        <p className="mt-3 flex-1 leading-7 text-[#667085]">
          {description}
        </p>

        <Link
          to={`/projects/${id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0170C1] transition-colors hover:text-[#005FA3]"
        >
          Voir le projet

          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export default Card;