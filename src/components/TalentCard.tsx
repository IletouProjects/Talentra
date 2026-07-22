import { Link } from "react-router";
import type { Talent } from "../types/Talent";

type TalentCardProps = {
  talent: Talent;
};

function TalentCard({ talent }: TalentCardProps) {
  const initials = talent.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D9EE] hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FB] text-lg font-bold text-[#0170C1]">
          {initials}
        </div>

        <span className="rounded-full border border-[#CDE5F5] bg-[#F1F8FD] px-3 py-1 text-xs font-semibold text-[#015A9A]">
          Disponible
        </span>
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0170C1]">
          {talent.company.name}
        </p>

        <h2 className="mt-2 text-xl font-bold text-[#0F2742]">
          {talent.name}
        </h2>

        <p className="mt-1 text-sm font-medium text-[#667085]">
          @{talent.username}
        </p>
      </div>

      <p className="mt-5 flex-1 leading-7 text-[#667085]">
        {talent.company.catchPhrase}
      </p>

      <div className="mt-6 space-y-3 border-t border-[#E3E8EF] pt-5 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[#98A2B3]">Localisation</span>

          <span className="text-right font-semibold text-[#344054]">
            {talent.address.city}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-[#98A2B3]">E-mail</span>

          <span className="truncate text-right font-semibold text-[#344054]">
            {talent.email.toLowerCase()}
          </span>
        </div>
      </div>

    <Link
  to={{
    pathname: "/contact",
    search: `?talent=${encodeURIComponent(
      talent.name,
    )}&email=${encodeURIComponent(talent.email)}`,
  }}
  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#0F2742] px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#173B5F] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0170C1] focus-visible:ring-offset-2 text-white"
>
  Contacter ce talent
</Link>
    </article>
  );
}

export default TalentCard;