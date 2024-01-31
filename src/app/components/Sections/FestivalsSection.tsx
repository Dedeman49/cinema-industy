import { TopFilms, TopShows } from "@/lib/data";
import Image from "next/image";

export default function FestivalsSection() {
  return (
    <div className="text-white uppercase font-black max-w-2xl mx-auto text-[12px] bg-zinc-950 py-10 px-10 rounded-lg mb-5">
      <div className="flex flex-col gap-3">
        <p>
          Un festival de film este o prezentare organizată și extinsă a filmelor
          într-unul sau mai multe cinematografe sau locuri de proiecție, de
          obicei într-un singur oraș sau regiune. Din ce în ce mai mult,
          festivalurile de film arată unele filme în aer liber.
          <br />
          <br />
          Filmele pot fi recente și, în funcție de obiectivul festivalului, pot
          include lansări internaționale și interne. Unele festivaluri de film
          se concentrează pe un anumit regizor, gen de film (de exemplu, filme
          de groază) sau subiect. Mai multe festivaluri de film se concentrează
          exclusiv pe prezentarea de scurtmetraje cu o lungime maximă definită.
          <br />
          <br />
          Festivalurile de film sunt de obicei evenimente anuale. Unii istorici
          de film, inclusiv Jerry Beck, nu consideră festivalurile de film ca
          lansări oficiale ale filmului. Cel mai vechi festival de film din lume
          este Festivalul de Film de la Veneția.
          <br />
          <br />
          Cele mai prestigioase festivaluri de film din lume, cunoscute sub
          numele de „Big Five”, sunt (enumerate în ordine cronologică în funcție
          de data înființării): Veneția, Cannes, Berlin (cele Trei Mari
          inițiale), Toronto și Sundance.
        </p>
      </div>
    </div>
  );
}
