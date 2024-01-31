import { TopFilms, TopShows } from "@/lib/data";
import Image from "next/image";

export default function MainSection() {
  return (
    <div className="text-white uppercase font-black max-w-2xl mx-auto text-[12px] bg-zinc-950 py-10 px-10 rounded-lg mb-5">
      <div className="flex flex-col gap-3">
        <p className="max-w-[300px]">
          - Un pasionat de film, care merge la cinematograf frecvent se numește
          „cinefil”, iar valoarea filmului este stabilită de criticul de film,
          cu ocazia apariției producției de film sau în cazul prezentării lui la
          diferite festivaluri de film.
        </p>
        <p className="max-w-[300px] self-end">
          - Film este termenul utilizat pentru desemnarea, în accepțiune mai
          largă, a produsului final al artei și industriei cinematografice.
        </p>
      </div>
      <h1 className="text-base md:text-2xl mt-10">Cele mai bune Filme 2024</h1>
      <div className="flex gap-2">
        {TopFilms.map((film) => (
          <div key={film.value}>
            <Image
              src={film.photo}
              alt="film"
              width={150}
              height={200}
              className="aspect-[2/3] object-cover"
            />
          </div>
        ))}
      </div>
      <h1 className="text-base md:text-2xl mt-10">
        Cele mai bune Seriale 2024
      </h1>
      <div className="flex gap-2">
        {TopShows.map((shows) => (
          <div key={shows.value}>
            <Image
              src={shows.photo}
              alt="film"
              width={150}
              height={200}
              className="aspect-[2/3] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <p className="max-w-[300px] self-end">
          Arta și industria cinematografică în vorbirea curentă sunt cunoscute
          sub denumirea de cinematografie.
        </p>
        <p className="max-w-[300px]">
          Un pasionat de film, care merge la cinematograf frecvent se numește
          „cinefil”, iar valoarea filmului este stabilită de criticul de film,
          cu ocazia apariției producției de film sau în cazul prezentării lui la
          diferite festivaluri de film.
        </p>
      </div>
    </div>
  );
}
